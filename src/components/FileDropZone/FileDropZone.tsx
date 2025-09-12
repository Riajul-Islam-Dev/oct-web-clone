"use client";

import { File, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DroppedFile extends File {
  preview: string;
  id: string;
}
interface RemoveFileFn {
  (id: string): void;
}

export default function FileDropZone({
  label = "Please attach documentation to verify your company information *",
}) {
  const [files, setFiles] = useState<DroppedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev: DroppedFile[]) => [
      ...prev,
      ...acceptedFiles.map((file: File) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: Math.random().toString(36).substr(2, 9),
        })
      ),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".svg", ".png", ".jpg", ".jpeg", ".gif"],
    },
    maxSize: 800 * 400 * 1000, // Approximate max size
    multiple: true,
  });

  const removeFile: RemoveFileFn = (id) => {
    setFiles((prev: DroppedFile[]) =>
      prev.filter((file: DroppedFile) => file.id !== id)
    );
  };

  return (
    <div>
      <div className="w-full">
        <label className="block text-sm font-ubuntu mb-2">{label}</label>

        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-gray-400"
          }`}
        >
          <input {...getInputProps()} />

          <div className="mx-auto flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="#6B7280"
                d="M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20H13q-.82 0-1.41-.59Q11 18.83 11 18v-5.15L9.4 14.4L8 13l4-4l4 4l-1.4 1.4l-1.6-1.55V18h5.5q1.05 0 1.77-.73q.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6Q9.93 6 8.46 7.46Q7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5T4.03 17q1.02 1 2.47 1H9v2m3-7"
              />
            </svg>
          </div>
          {isDragActive ? (
            <p className="text-sm text-blue-600">Drop the files here...</p>
          ) : (
            <>
              <p className="text-sm text-gray-600 mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 800×400px)
              </p>
            </>
          )}
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            <h4 className="text-sm font-medium text-gray-700">
              Selected Files:
            </h4>
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <File className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-48">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
