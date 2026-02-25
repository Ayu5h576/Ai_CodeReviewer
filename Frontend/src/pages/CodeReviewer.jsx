import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import Markdown from "react-markdown";
import axios from "axios";
import "./codeReviewer.css";

export default function CodeReviewer() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="app-container">
      {/* Editor */}
      <section className="editor-panel">
        <header>Code Editor</header>

        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            Prism.highlight(code, Prism.languages.javascript, "javascript")
          }
          padding={18}
          className="editor"
        />

        <button className="review-btn" onClick={reviewCode}>
          {loading ? "Analyzing..." : "🚀 Review Code"}
        </button>
      </section>

      {/* Review */}
      <section className="review-panel">
        <header>AI Assistant</header>

        <div className="review-content">
          {!review && !loading && (
            <div className="placeholder">
              Paste code and click <b>Review Code</b> to get feedback.
            </div>
          )}

          {loading && (
            <div className="typing">AI is reviewing your code...</div>
          )}

          {review && (
            <div className="chat-bubble">
              <Markdown>{review}</Markdown>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
