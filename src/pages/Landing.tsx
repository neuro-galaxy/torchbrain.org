import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex flex-col gap-10 pt-50 px-4 items-center">
        <img className="h-60" src="/images/torchbrain.png"></img>
        <div className="font-mono font-extrabold text-5xl">torch_brain</div>
        <div className="text-xl/8">
          A PyTorch-friendly library for learning from Neural Data.
          <br />
          Helps you write efficient training pipelines and models.
        </div>

        <div className="flex justify-center px-4">
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
        className="flex flex-col mx-auto py-8 max-w-(--w-wide) px-8 mb-8 text-gray-200"
        id="Contribute"
      >
        <span className="text-center font-bold text-3xl custom-headline mb-4">
          Contribute
        </span>

        <span className="text-center text-lg">
          We are new and would appreciate any and all contributions!
        </span>
        <span className="text-center text-xl font-medium">
          <a href="https://discord.gg/kQNKA6B8ZC">
            {" "}
            Join our Discord community! <i className="fa-brands fa-discord"></i>
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
