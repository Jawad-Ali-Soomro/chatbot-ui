import {
  BiHelpCircle,
  BiHistory,
  BiLogOut,
  BiNews,
  BiPlus,
  BiSend,
} from "react-icons/bi";
import "../styles/home.css";
import { FaAngleRight, FaHeadset, FaNewspaper } from "react-icons/fa";
import { useState } from "react";
import { CgLock, CgRead } from "react-icons/cg";
import { BsClock } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import { MdCreate, MdHelpCenter } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

const Home = () => {
  const [prompt, setPrompt] = useState();
  const [showMenu, setMenu] = useState(false);
  const sampleChat = [
    {
      id: 1,
      chatPrompt: "help design a cybersecurity system for my website",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },

    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
    {
      id: 2,
      chatPrompt: "what is cybersecurity can you aware me with this topic",
    },
  ];

  return (
    <div className="main-wrap flex col">
      <div
        className="side-bar flex col"
        style={{ width: `${showMenu ? "300px" : "0px"}` }}
      >
        <div className="bars flex col" onClick={() => setMenu(!showMenu)}>
          <div
            style={{
              transform: `${showMenu ? "rotate(45deg)" : ""}`,
              position: `${showMenu ? "absolute" : ""}`,
            }}
          ></div>
          <div style={{ opacity: `${showMenu ? "0" : 1}` }}></div>
          <div
            style={{
              transform: `${showMenu ? "rotate(-45deg)" : ""}`,
              position: `${showMenu ? "absolute" : ""}`,
            }}
          ></div>
        </div>
        <div
          className="logo flex"
          style={{ width: `${showMenu ? "200px" : "0px"}` }}
        >
          <img src="/logo.png" alt="" />
        </div>
        <div
          className="sample-chat flex col"
          style={{ width: `${showMenu ? "260px" : "0px"}` }}
        >
          {sampleChat?.map((chat) => {
            return (
              <div className="chat-card flex" key={chat?.id}>
                <BiHistory />
                <p>{chat?.chatPrompt?.substring(0, 20)}...</p>
              </div>
            );
          })}
        </div>
        <div className="icons flex col">
          <div className="icon flex">
            <FaHeadset />
          </div>
          <div className="icon flex">
            <FaNewspaper />
          </div>
          <div className="icon flex">
            <MdCreate />
          </div>
          <div className="icon flex">
            <BiLogOut />
          </div>
        </div>
      </div>
      <div
        className="top-content flex col"
        style={{ marginLeft: `${showMenu ? "300px" : "0px"}` }}
      >
        <h1>Hello Shoaib</h1>
        <h2>How can I help you today?</h2>
      </div>
      <div
        className="cards flex"
        style={{ marginLeft: `${showMenu ? "300px" : "0px"}` }}
      >
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
      <div
        className="input-wrap flex"
        style={{ marginLeft: `${showMenu ? "300px" : "0px"}` }}
      >
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
