import { useNavigate } from "react-router-dom";

const ErrorComponent = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <svg
            className="mx-auto animate-pulse"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#f6821f"
              strokeWidth="4"
              fill="none"
              className="animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <path
              d="M70 70L130 130M130 70L70 130"
              stroke="#f6821f"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-2 h-2 rounded-full animate-bounce absolute -top-4 -left-4"
              style={{ backgroundColor: "#f6821f" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full animate-bounce absolute -top-8 right-8"
              style={{ backgroundColor: "#ffa04d", animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full animate-bounce absolute -bottom-6 -right-2"
              style={{ backgroundColor: "#e67311", animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1 h-1 rounded-full animate-bounce absolute bottom-4 -left-6"
              style={{ backgroundColor: "#ffa04d", animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-2 h-2 rounded-full animate-bounce absolute top-2 right-12"
              style={{ backgroundColor: "#f6821f", animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          We encountered an unexpected error. Don't worry, it's not your fault!
        </p>

        <button
          className="inline-flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          style={{
            backgroundColor: "#f6821f",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e67311")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f6821f")
          }
          onClick={handleGoHome}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.6 5.4 21 6 21H9M19 10L21 12M19 10V20C19 20.6 18.6 21 18 21H15M9 21C9.6 21 10 20.6 10 20V16C10 15.4 10.4 15 11 15H13C13.6 15 14 15.4 14 16V20C14 20.6 14.4 21 15 21M9 21H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
