import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = () => {
  const codeString = `
const coder = {
  name: 'NY Henry',
  skills: ['React', 'Node', 'Hono', 'Express', 'MongoDb', ...],
  hardworker: true,
  problemSolver: true,
  hireable: function() {
    return (
      this.hardworker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
  music: 'EDM Producer',
};

coder.hire = true; ✅
  `;

  return (
    <div
      style={{
        backgroundColor: "#282c34", // A dark background color for the container
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        margin: "2rem 0", // Example margin
      }}
    >
      <div
        style={{
          backgroundColor: "#21252b", // A slightly lighter header background
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            height: "12px",
            width: "12px",
            backgroundColor: "#ff5f56",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        ></span>
        <span
          style={{
            height: "12px",
            width: "12px",
            backgroundColor: "#ffbd2e",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        ></span>
        <span
          style={{
            height: "12px",
            width: "12px",
            backgroundColor: "#27c93f",
            borderRadius: "50%",
          }}
        ></span>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={false}
        customStyle={{ margin: 0, borderRadius: "0 0 8px 8px" }}
      >
        {codeString.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
