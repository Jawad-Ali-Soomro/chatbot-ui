import { BiSend } from "react-icons/bi";
import "../styles/home.css";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [prompt, setPrompt] = useState();
  return (
    <div className="main-wrap flex col">
      <div className="top-content flex col">
        <h1>Hello Shoaib</h1>
        <h2>How can I help you today?</h2>
      </div>
      <div className="cards flex">
        <div
          className="card"
          onClick={() =>
            setPrompt("help design a cybersecurity system for my website")
          }
        >
          <p>help design a cybersecurity system for my website</p>
          <button>
            <FaAngleRight />
          </button>
        </div>
        <div
          className="card"
          onClick={() =>
            setPrompt("what is cybersecurity can you aware me with this topic")
          }
        >
          <p>what is cybersecurity can you aware me with this topic</p>
          <button>
            <FaAngleRight />
          </button>
        </div>
        <div
          className="card"
          onClick={() =>
            setPrompt(
              "How can I protect yourself from online scams and phishing attacks"
            )
          }
        >
          <p>
            How can I protect yourself from online scams and phishing attacks
          </p>
          <button>
            <FaAngleRight />
          </button>
        </div>
        <div
          className="card"
          onClick={() =>
            setPrompt(
              "What is social engineering, and how can you avoid falling victim to it"
            )
          }
        >
          <p>
            What is social engineering, and how can you avoid falling victim to
            it
          </p>
          <button className="flex">
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="input-wrap flex">
        <input
          type="text"
          placeholder="Enter prompt here"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
        <button>
          <BiSend />
        </button>
      </div>
    </div>
  );
};
export default Home;
