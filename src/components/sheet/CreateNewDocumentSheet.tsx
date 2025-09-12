"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CreateNewDocumentSheetProps {
  onClose?: () => void;
}

export function CreateNewDocumentSheet({ onClose }: CreateNewDocumentSheetProps) {
  const [fileName, setFileName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ fileName, description, file });
    if (onClose) onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <SheetContent className="min-w-[630px]">
      <ScrollArea className="h-screen">
        <SheetHeader>
          <SheetTitle>ADD NEW DOCUMENT</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mx-6 mt-6">
          {/* File Name */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              File name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Type file name"
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent"
              required
            />
          </div>

          {/* Upload File */}
          <div className="mb-6">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Upload file <span className="text-red-500">*</span>
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragOver ? "border-[#316db4] bg-blue-50" : "border-[#e2e8f0] hover:border-[#b4b4b4]"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <input type="file" onChange={handleFileChange} accept=".pdf" className="hidden" id="file-upload" />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="mx-auto mb-3 text-[#b4b4b4]" size={32} />
                <p className="text-[#b4b4b4] mb-1">Click to upload or drag and drop</p>
                <p className="text-[#899ab2] text-sm">Pdf (MAX 100kb )</p>
              </label>
              {file && <p className="mt-2 text-[#393939] text-sm">Selected: {file.name}</p>}
            </div>
          </div>

          {/* Short Description */}
          <div className="mb-8">
            <label className="block text-[#393939] text-sm font-medium mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Type Short Description"
              rows={4}
              className="w-full px-3 py-3 border border-[#e2e8f0] rounded-md text-[#393939] placeholder-[#b4b4b4] focus:outline-none focus:ring-2 focus:ring-[#316db4] focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-[#eda92c] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-[#316db4] text-white rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              Add
            </button>
          </div>
        </form>
      </ScrollArea>
    </SheetContent>
  );
}