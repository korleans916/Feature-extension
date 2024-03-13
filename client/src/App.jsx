import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//Here is where my great project starts
const { VITE_BARD_API_KEY } = import.meta.env;
function App() {
  const [generatedText, setGeneratedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const runColorAnalysis = async () => {
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(VITE_BARD_API_KEY); // Enviroment Variable
      const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Enviroment Variable
      const prompt =
        "If I have black hair and brown eyes which colors are more suitable for me?";

      // Generate content based on the prompt
      const result = await model.generateContent(prompt); // method (documentation Google AI) responsable for sending the prompt to the generative model and returning a result
      const response = await result.response;
      const text = await response.text();

      setGeneratedText(text); // text is the variable that contains the text content generated by Google AI based on the prompt
    } catch (error) {
      setGeneratedText("There was an error in your petition");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Color Analysis</h1>
      <div className="card">
        <button onClick={runColorAnalysis} disabled={loading}>
          {loading ? "Generating..." : "Generate Text"}
        </button>
        {generatedText !== null && <p>Generated Text: {generatedText}</p>}
      </div>
    </>
  );
}

export default App;
