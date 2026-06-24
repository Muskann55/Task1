import { useState, useEffect, useCallback } from "react";

function Generator() {
  const [length, setLength] = useState(8);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setRandomString(result);
}, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyText = () => {
    navigator.clipboard.writeText(randomString);
    alert("Copied Successfully!");
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random String Generator</h1>

      <label>
        String Length:
      </label>

      <br /><br />

      <input
        type="number"
        value={length}
        min="1"
        max="50"
        onChange={(e) =>
          setLength(Number(e.target.value))
        }
      />

      <br /><br />

      <button onClick={generateString}>
        Generate
      </button>

      <br /><br />

      <input
        type="text"
        value={randomString}
        readOnly
        style={{ width: "300px"}}