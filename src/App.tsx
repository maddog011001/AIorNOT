import React from 'react';
import { Header } from './components/Header';
import { VideoUpload } from './components/VideoUpload';
import { Features } from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Detect AI-Generated Videos
          </h2>
          <p className="text-gray-600 text-lg">
            Upload your video and our advanced AI will determine if it's human-created or AI-generated
          </p>
        </div>

        <VideoUpload />
        
        <div className="mt-24 mb-12">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Why Choose AIorNOT?
          </h3>
          <Features />
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} AIorNOT. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;