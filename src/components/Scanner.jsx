// components/Scanner.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUpload,
  FaFilePdf,
  FaDownload,
  FaSpinner,
  FaCheck,
  FaTimesCircle,
  FaCopy,
} from "react-icons/fa";
import { jsPDF } from "jspdf";
import { saveAs } from "file-saver";

const Scanner = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [extractedText, setExtractedText] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("TXT");
  const [showCopyModal, setShowCopyModal] = useState(false);
  const fileInputRef = useRef(null);

  // Removed API_KEY and OCR_SPACE_URL for security - you should use environment variables
  // const API_KEY = "K88506384788957";
  // const OCR_SPACE_URL = "https://api.ocr.space/parse/image";

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      processDocument(selectedFile);
    }
  };

  const processDocument = async (file) => {
    setIsProcessing(true);
    setIsComplete(false);
    setExtractedText("");

    try {
      const formData = new FormData();
      formData.append("apikey", import.meta.env.VITE_OCR_API_KEY);
      formData.append("file", file);
      formData.append("language", "eng");
      formData.append("isOverlayRequired", "false");

      const response = await fetch(import.meta.env.VITE_OCR_API_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data?.ParsedResults?.length > 0) {
        setExtractedText(data.ParsedResults[0].ParsedText.trim());
      } else {
        setExtractedText("⚠️ No text extracted. Try a clearer document.");
      }
    } catch (error) {
      console.error("OCR error:", error);
      setExtractedText("❌ Error during text extraction. Please try again.");
    } finally {
      setIsProcessing(false);
      setIsComplete(true);
    }
  };

  const handleDownload = () => {
    if (!extractedText) return;

    const fileName = file
      ? `extracted_${file.name.split(".")[0]}.${selectedFormat.toLowerCase()}`
      : `extracted_document.${selectedFormat.toLowerCase()}`;

    switch (selectedFormat) {
      case "PDF":
        try {
          const pdf = new jsPDF();
          const splitText = pdf.splitTextToSize(extractedText, 180);
          pdf.text(splitText, 10, 10);
          pdf.save(fileName);
        } catch (error) {
          console.error("PDF generation error:", error);
          alert("Failed to generate PDF. Please try again.");
        }
        break;

      case "DOCX":
        try {
          const blobDocx = new Blob(
            [
              `<!DOCTYPE html><html><body><pre>${extractedText}</pre></body></html>`,
            ],
            {
              type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            }
          );
          saveAs(blobDocx, fileName);
        } catch (error) {
          console.error("DOCX generation error:", error);
          alert("Failed to generate DOCX. Please try again.");
        }
        break;

      case "HTML":
        try {
          const blobHtml = new Blob(
            [
              `<html><head><title>Extracted Document</title></head><body><pre>${extractedText}</pre></body></html>`,
            ],
            { type: "text/html;charset=utf-8" }
          );
          saveAs(blobHtml, fileName);
        } catch (error) {
          console.error("HTML generation error:", error);
          alert("Failed to generate HTML. Please try again.");
        }
        break;

      default: // TXT
        try {
          const blobTxt = new Blob([extractedText], {
            type: "text/plain;charset=utf-8",
          });
          saveAs(blobTxt, fileName);
        } catch (error) {
          console.error("TXT generation error:", error);
          alert("Failed to generate text file. Please try again.");
        }
        break;
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      processDocument(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  };

  const handleClear = () => {
  setFile(null);
  setExtractedText("");
  setIsComplete(false);
  setIsProcessing(false);
  if (fileInputRef.current) {
    fileInputRef.current.value = ''; // Reset file input
  }
};

  const handleCopy = async () => {
    if (!extractedText) return;
    try {
      await navigator.clipboard.writeText(extractedText);
      setShowCopyModal(true);
      setTimeout(() => setShowCopyModal(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = extractedText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowCopyModal(true);
      setTimeout(() => setShowCopyModal(false), 2000);
    }
  };

  const formats = ["PDF", "DOCX", "TXT", "HTML"];

  return (
    <section
      id="scanner"
      className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      {/* Decorative gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.15),_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-3">
            Smart <span className="text-yellow-400">Document Scanner</span>
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl">
            Scan. Extract. Export — Powered by AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onClick={() => !file && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all ${
                file
                  ? "border-green-400/50"
                  : "border-gray-400/50 hover:border-yellow-400"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".jpg,.jpeg,.png,.pdf,.tiff"
                className="hidden"
              />

              <AnimatePresence mode="wait">
                {!file ? (
                  <motion.div key="upload" className="space-y-4">
                    <FaUpload className="text-yellow-400 text-5xl mx-auto" />
                    <h3 className="text-white text-xl font-semibold">
                      Upload or Drag a File
                    </h3>
                    <p className="text-gray-400">
                      Supported: JPG, PNG, PDF, TIFF
                    </p>
                  </motion.div>
                ) : isProcessing ? (
                  <motion.div key="processing" className="space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <FaSpinner className="text-yellow-400 text-5xl mx-auto" />
                    </motion.div>
                    <h3 className="text-white text-xl font-semibold">
                      Processing...
                    </h3>
                    <p className="text-gray-400">
                      AI is scanning your document
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="complete" className="space-y-4">
                    <FaCheck className="text-green-400 text-5xl mx-auto" />
                    <h3 className="text-white text-xl font-semibold">
                      Scan Complete!
                    </h3>
                    <p className="text-gray-400">
                      Your document is ready for export
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clear button below upload area */}
            {file && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex justify-center"
              >
                <button
                  onClick={handleClear}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-500/30 rounded-lg transition-colors text-sm"
                >
                  <FaTimesCircle /> Clear Document
                </button>
              </motion.div>
            )}

            {/* File Info + Clear + Export */}
            {file && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-white font-medium truncate max-w-[200px]">
                    {file.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  {isComplete && (
                    <motion.button
                      onClick={handleDownload}
                      className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md hover:bg-yellow-300 transition text-sm"
                    >
                      <FaDownload /> Export {selectedFormat}
                    </motion.button>
                  )}

                  {/* Clear button in file info area */}
                  <button
                    onClick={handleClear}
                    className="text-gray-300 hover:text-red-400 transition p-2"
                    title="Remove file"
                  >
                    <FaTimesCircle size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Extracted Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl relative"
          >
            <h3 className="text-white text-xl font-bold mb-4">
              Extracted Text
            </h3>
            <AnimatePresence mode="wait">
              {!file ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-400 italic text-center py-12"
                >
                  Upload a document to see extracted text here.
                </motion.div>
              ) : isProcessing ? (
                <motion.div key="loading" className="space-y-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-4 bg-gray-600/50 rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      style={{ width: `${Math.random() * 40 + 60}%` }}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto relative min-h-[200px]"
                >
                  <div className="text-gray-200 whitespace-pre-wrap leading-relaxed text-sm mt-2">
                    {extractedText}
                  </div>

                  {/* Copy Button */}
                  {extractedText && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopy}
                      className="absolute top-3 right-3 text-gray-300 hover:text-yellow-400 transition p-2"
                      title="Copy text"
                    >
                      <FaCopy size={20} />
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Export Options */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <h4 className="text-white font-semibold mb-3">Export As</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formats.map((format) => (
                    <motion.button
                      key={format}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedFormat(format)}
                      className={`py-2 rounded-lg font-medium transition-all ${
                        selectedFormat === format
                          ? "bg-yellow-400 text-black shadow-md"
                          : "bg-gray-800/40 text-gray-300 hover:bg-yellow-500/40 hover:text-white"
                      }`}
                    >
                      {format}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Copy Notification Modal */}
      <AnimatePresence>
        {showCopyModal && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 right-6 z-40 bg-yellow-400 text-black px-5 py-3 rounded-xl shadow-xl font-semibold"
          >
            ✅ Text Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Scanner;
