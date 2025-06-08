import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "framer-motion";

// Make sure to place one of your music files in the public directory
// or import it if your setup allows.
import myTrack from "../assets/The One.wav";
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
  Coding stack: ['React', 'TypeScript', 'Vite', ...],
  Music Stack: ['Fl Studio', 'Splice', 'FabFilter Bundle', 'Nexus', ...]
};`;

  return (
    // Main container
    <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden my-8 max-w-2xl mx-auto">
      {/* Header with window dots */}
      <div className="bg-slate-800 p-4 flex items-center">
        <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
        <span className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></span>
        <span className="h-3 w-3 bg-green-500 rounded-full"></span>
      </div>

      {/* Code and Controls Section */}
      <div className="p-6">
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
              fontSize: "0.9rem",
            },
          }}
        >
          {codeString}
        </SyntaxHighlighter>

        {/* Interactive Controls */}
        <div className="mt-4 flex items-center gap-6 font-mono text-sm">
          <button
            onClick={togglePlay}
            className="text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500 text-xl rounded-sm"
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-6 h-6 inline mr-1" />
                track.pause()
              </>
            ) : (
              <>
                <PlayIcon className="w-6 h-6 inline mr-1" />
                track.play()
              </>
            )}
          </button>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="text-fuchsia-400 text-xl hover:underline focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded-sm"
          >
            {showInfo ? "user.hideInfo()" : "user.showInfo()"}
          </button>
        </div>

        {/* Animated Info Panel */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              className="mt-4 p-4 bg-slate-800 rounded-lg text-slate-300 text-base"
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
