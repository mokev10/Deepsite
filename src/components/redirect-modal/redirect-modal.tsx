import { useState, useEffect } from "react";

interface RedirectModalProps {
  onDismiss: () => void;
}

const RedirectModal = ({ onDismiss }: RedirectModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-75"
        onClick={onDismiss}
      />
      <div className="relative bg-gray-900 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 transform transition-transform duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">
          New Version Available!
        </h2>
        <p className="text-gray-300 mb-6">
          A new and improved version of DeepSite is now available. We recommend
          using the latest version for the best experience and newest features.
        </p>
        <div className="flex gap-4">
          <a
            href="https://deepsite.hf.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
          >
            Go to Latest Version
          </a>
          <button
            onClick={onDismiss}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Continue Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedirectModal;
