"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { File, X } from "lucide-react";

type UploadedFile = {
  file: File;
  id: string;
  name: string;
  size: number;
  preview: string | null;
};
type FormatFileSizeFn = {
  (bytes: number): string;
};
type RemoveFileFn = {
  (fileId: string): void;
};

export default function FileDropZone2({ className = "" }) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map((file: File) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));

    setUploadedFiles((prev: UploadedFile[]) => [...prev, ...newFiles]);
  }, []);

  const removeFile: RemoveFileFn = (fileId) => {
    setUploadedFiles((prev: UploadedFile[]) => {
      const updated: UploadedFile[] = prev.filter(
        (f: UploadedFile) => f.id !== fileId
      );
      // Clean up preview URLs to prevent memory leaks
      const fileToRemove: UploadedFile | undefined = prev.find(
        (f: UploadedFile) => f.id === fileId
      );
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return updated;
    });
  };

  const formatFileSize: FormatFileSizeFn = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        "text/csv": [".csv"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
        "application/vnd.ms-excel": [".xls"],
      },
      maxSize: 100 * 1024, // 100kb
      multiple: true,
    });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`
          relative rounded-md border shadow-xs py-4 text-center cursor-pointer transition-all duration-200 ease-in-out
          ${
            isDragActive && !isDragReject
              ? "border-blue-400 bg-blue-50"
              : isDragReject
              ? "border-red-400 bg-red-50"
              : "border-[#E2E8F0] hover:border-gray-300 hover:bg-gray-50/80"
          } ${className}
        `}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center space-y-1">
          <div className={`rounded-full transition-colors duration-200`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#6B7280"
                d="M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13q-.82 0-1.41-.59Q11 18.83 11 18v-5.15L9.4 14.4L8 13l4-4l4 4l-1.4 1.4l-1.6-1.55V18h5.5q1.05 0 1.77-.73q.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6Q9.93 6 8.46 7.46Q7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5T4.03 17q1.02 1 2.47 1H9v2m3-7"
              />
            </svg>
          </div>

          <div className="">
            <p className="text-sm text-gray-700">
              {isDragActive
                ? isDragReject
                  ? "File type not supported"
                  : "Drop files here"
                : "Click to upload or drag and drop"}
            </p>
            <p className="text-xs text-gray-500">CSV/Excel (MAX 100kb)</p>
          </div>
        </div>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-lg font-medium text-gray-700">Uploaded Files</h3>
          <div className="space-y-2">
            {uploadedFiles.map((fileObj) => (
              <div
                key={fileObj.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <File className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {fileObj.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(fileObj.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(fileObj.id);
                  }}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
                  aria-label="Remove file"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
