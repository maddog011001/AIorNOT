import React from 'react';
import { Brain, Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="w-full py-6 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-white" />
            <h1 className="text-2xl font-bold text-white">AIorNOT</h1>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Trusted AI Detection</span>
          </div>
        </div>
      </div>
    </header>
  );
}