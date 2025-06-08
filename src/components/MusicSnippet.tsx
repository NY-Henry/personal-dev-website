import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";

// Make sure to place one of your music files in the public directory
// or import it if your setup allows.
import myTrack from "../assets/The One.mp3";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";

const MusicSnippet = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Use a ref to hold the audio element to prevent re-creation on re-renders
  const audioRef = useRef<HTMLAudioElement | null>(null);
  if (audioRef.current === null) {
    audioRef.current = new Audio(myTrack);
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const codeString = `const NY_Henry = {
  role: 'Software Engineer & Music Producer',
  location: 'Kampala, Uganda',
  university: 'Ndejje University',
  Coding stack: ['TypeScript', 'Vite', ...],
  Music Stack: ['Fl Studio', 'Nexus', ...]
};`;

  return (
    // Main container - responsive width and margins
    <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden my-4 sm:my-8 max-w-2xl mx-auto w-full px-4 sm:px-0">
      {/* Header with window dots */}
      <div className="bg-slate-800 p-3 sm:p-4 flex items-center">
        <span className="h-2 w-2 sm:h-3 sm:w-3 bg-red-500 rounded-full mr-2"></span>
        <span className="h-2 w-2 sm:h-3 sm:w-3 bg-yellow-500 rounded-full mr-2"></span>
        <span className="h-2 w-2 sm:h-3 sm:w-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Code and Controls Section */}
      <div className="p-3 sm:p-6">
        <SyntaxHighlighter
          language="javascript"
          style={vscDarkPlus}
          customStyle={{
            // Override default styles from the theme
            margin: 0,
            padding: 0,
            backgroundColor: "transparent", // Use parent's background
          }}
          codeTagProps={{
            style: {
              fontFamily: '"Fira Code", monospace', // A popular coding font
              fontSize: window.innerWidth < 640 ? "0.75rem" : "0.9rem",
            },
          }}
        >
          {codeString}
        </SyntaxHighlighter>

        {/* Interactive Controls - responsive layout */}
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 font-mono text-xs sm:text-sm">
          <button
            onClick={togglePlay}
            className="text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-xl rounded-sm flex items-center"
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1" />
                <span className="break-all">track.pause()</span>
              </>
            ) : (
              <>
                <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6 inline mr-1" />
                <span className="break-all">track.play()</span>
              </>
            )}
          </button>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-fuchsia-400 text-base sm:text-xl hover:underline focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded-sm"
          >
            <span className="break-all">
              {showInfo ? "user.hideInfo()" : "user.showInfo()"}
            </span>
          </button>
        </div>

        {/* Animated Info Panel */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              className="mt-3 sm:mt-4 p-3 sm:p-4 bg-slate-800 rounded-lg text-slate-300 text-sm sm:text-base"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                As a software engineering student, I love building things with
                code. As a music producer and sound engineer, I love creating
                experiences with sound. Those are my two worlds... 🍀
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MusicSnippet;
