import React, { useState, useCallback } from 'react';
import { Upload, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export function VideoUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<'ai' | 'human' | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith('video/')) {
      setFile(droppedFile);
      simulateAnalysis();
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      simulateAnalysis();
    }
  }, []);

  const simulateAnalysis = () => {
    setAnalyzing(true);
    setResult(null);
    // Simulate AI analysis with random result
    setTimeout(() => {
      setAnalyzing(false);
      setResult(Math.random() > 0.5 ? 'ai' : 'human');
    }, 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="video/*"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileInput}
        />
        <div className="text-center">
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">
            Drop your video here or click to upload
          </h3>
          <p className="text-sm text-gray-500">
            Supports MP4, WebM, and other common video formats
          </p>
        </div>
      </div>

      {file && (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <h4 className="font-medium mb-2">Selected Video:</h4>
          <p className="text-sm text-gray-600 mb-4">{file.name}</p>
          
          {analyzing ? (
            <div className="flex items-center gap-2 text-blue-600">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing video...</span>
            </div>
          ) : result && (
            <div className={`flex items-center gap-2 ${
              result === 'human' ? 'text-green-600' : 'text-red-600'
            }`}>
              {result === 'human' ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>This appears to be human-created content</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5" />
                  <span>This video likely contains AI-generated content</span>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}