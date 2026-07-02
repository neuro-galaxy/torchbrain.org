import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="grow"></div>

      <div className="flex flex-col gap-10 pt-24 px-4 items-center text-center">
        <img className="h-60 custom-logo-glow" src="/images/torchbrain.png"></img>
        <div className="font-mono font-extrabold text-5xl">torch_brain</div>
        <div className="text-xl/8">
          A PyTorch-friendly open-source library for learning from Neural Data.
          <br />
          Helps you write efficient training pipelines and models.
        </div>

        <div className="flex justify-center">
          <InstallCommand command="pip install torch torch_brain" />
        </div>

        <div className="flex justify-center gap-8 text-xl text-gray-300">
          <a
            className="flex items-center gap-2 hover:text-white transition"
            href="https://github.com/neuro-galaxy/torch_brain"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            className="flex items-center gap-2 hover:text-white transition"
            href="https://torch-brain.readthedocs.io/en/latest/"
          >
            <i className="fa-solid fa-book"></i> Docs
          </a>
        </div>
      </div>

      <div className="grow"></div>

      <div
        className="flex flex-col items-center text-center gap-1 mt-20 mb-4 text-gray-300"
      >
        <span className="text-2xl font-bold">
          Contribute
        </span>
        <span className="text-lg">
          We welcome any and all contributions!
        </span>
        <span className="flex items-center gap-2 hover:text-white transition text-center text-lg font-medium">
          <a href="https://discord.gg/kQNKA6B8ZC">
            <i className="fa-brands fa-discord"></i> Join our Discord community!
          </a>
        </span>
      </div>

      <Footer />
    </div>
  );
}

function InstallCommand({
  command,
  className = "",
}: {
  command: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      title="Click to copy"
      className={`flex items-center gap-4 font-mono text-sm md:text-base px-12 py-3 bg-white/5 border border-white/10 rounded-md cursor-pointer hover:bg-white/10 transition ${className}`}
    >
      {command}
      <i
        className={`${copied ? "fa-solid fa-check text-green-400" : "fa-regular fa-copy"} text-gray-400`}
      ></i>
    </button>
  );
}

export default Landing;
