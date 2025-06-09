const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-[var(--primary-color)]"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-[var(--primary-light)] opacity-30"></div>
        </div>

        {/* Loading text with pulse animation */}
        <div className="text-[var(--text-primary)] font-medium text-lg animate-pulse">
          Loading...
        </div>

        {/* Animated dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-[var(--primary-color)] rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
