import { useState } from "react";

function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("Hindi");
  const [result, setResult] = useState("");

  const handleTranslate = () => {
    setResult(`Translated "${text}" to ${language}`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Text Translator</h1>

      <textarea
        rows="5"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option>Hindi</option>
        <option>French</option>
        <option>Spanish</option>
      </select>

      <br /><br />

      <button onClick={handleTranslate}>
        Translate
      </button>

      <br /><br />

      <h3>Output:</h3>

      <div
        style={{
          border: "1px solid white",
          padding: "15px",
          width: "400px",
          margin: "auto"
        }}
      >
        {result}
      </div>
    </div>
  );
}

export default Translator;