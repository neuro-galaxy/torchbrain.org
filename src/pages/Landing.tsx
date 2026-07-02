import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="flex flex-col items-center gap-8 text-center pt-24 lg:pt-32 pb-16 px-4 custom-headline-bg">
        <img
          className="h-30 md:h-50 md:mb-4 transition delay-0 duration-150 ease-in-out hover:-translate-y-1.5"
          src="/images/torchbrain.png"
        ></img>
        <div className="font-mono font-extrabold text-4xl sm:text-4xl md:text-5xl lg:text-6xl custom-headline">
          torch_brain
        </div>
        <div className="max-w-[700px] text-xl font-light text-gray-300">
          A PyTorch-friendly library for working with Neural Data.
          <br/>
          Helps you write efficient training pipelines and models.
        </div>
      </div>

      <div className="flex justify-center px-4 mt-4">
        <div className="font-mono text-sm md:text-base px-12 py-3 bg-white/5 border border-white/10 rounded-md">
          pip install torch torch_brain
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-6 text-lg md:text-xl text-gray-300">
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


      <div
        className="flex flex-col mx-auto py-16 max-w-(--w-wide) px-8 mb-8"
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

      <div className="grow"></div>
      <Footer />
    </div>
  );
}

function PackageCard({
  title,
  description,
  href,
  img_src,
}: {
  title: string;
  description: string;
  href: string;
  img_src: string;
}) {
  return (
    <a className="flex md:flex-col items-center" href={href}>
      <img
        className="h-30 md:h-50 md:mb-4 transition delay-0 duration-150 ease-in-out hover:-translate-y-1.5"
        src={img_src}
      ></img>
      <div className="flex flex-col md:items-center">
        <span className="font-mono font-bold md:text-xl">{title}</span>
        <span className="mt-1 md:text-center text-sm md:text-base">{description}</span>
      </div>
    </a>
  );
}

interface FeatureCardSamplerState {
  length: number;
  num_samples: number;
  visible: boolean[];
  offset: number;
}

function FeatureCardSamplers() {
  const total_length = 450;
  const [samplerState, setSamplerState] = useState<FeatureCardSamplerState>({
    length: 20,
    num_samples: 10,
    visible: Array(10).fill(false), // Start with all false
    offset: 0.0,
  });

  const animate = () => {
    setSamplerState((prevState) => {
      const newVisible = [...prevState.visible];
      const falseIndices = prevState.visible
        .map((visible, index) => (visible ? null : index))
        .filter((index) => index !== null) as number[];

      if (falseIndices.length === 0) return initState();

      const idx = falseIndices[Math.floor(Math.random() * falseIndices.length)];
      newVisible[idx] = true;

      return {
        ...prevState,
        visible: newVisible,
      };
    });
  };

  const initState = () => {
    const sample_length = random(20, 40);
    const offset = random(0, sample_length);
    const num_samples = Math.floor((total_length - offset) / sample_length);
    const state = {
      length: sample_length,
      num_samples: num_samples,
      visible: Array(num_samples).fill(false), // Start with all false
      offset: offset,
    };
    return state;
  };

  useEffect(() => {
    const state = initState();
    setSamplerState(state);

    const id = setInterval(animate, 200); // Slower interval for better visibility
    return () => clearInterval(id);
  }, []); // Remove setSamplerState from dependencies

  return (
    <div
      className="flex flex-col justify-center my-8"
      style={{ width: `${total_length}px` }}
    >
      <div className="h-[100px] border-b-[0.5px] flex">
        {Array.from(Array(samplerState.num_samples).keys()).map((i) => (
          <div
            key={i}
            className="h-full custom-sample-block"
            style={{
              transform: `translateX(${samplerState.offset}px)`,
              width: `${samplerState.length}px`,
              opacity: samplerState.visible[i] ? 1 : 0.2,
              transition: "0.1s ease-in",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function FeatureCardAugmentation() {
  const num_neurons = 7;
  const [state, setState] = useState(Array(num_neurons).fill(true));

  const getRandomState = () => {
    const newState = state.map(() => Math.random() > 0.5);
    // Ensure at least 2 neurons are active
    const activeCount = newState.filter(Boolean).length;
    if (activeCount < 2) {
      // Randomly activate additional neurons to reach at least 2
      const inactiveIndices = newState
        .map((active, index) => (active ? -1 : index))
        .filter((i) => i !== -1);
      const neededActivations = 2 - activeCount;
      for (
        let i = 0;
        i < neededActivations && i < inactiveIndices.length;
        i++
      ) {
        const randomIndex = Math.floor(Math.random() * inactiveIndices.length);
        const neuronIndex = inactiveIndices.splice(randomIndex, 1)[0];
        newState[neuronIndex] = true;
      }
    }
    return newState;
  };

  const animate = () => {
    setState(getRandomState());
  };

  useEffect(() => {
    setState(getRandomState());
    const id = setInterval(animate, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-60 h-45 relative my-8">
      <img
        src="/images/features/augmentations/n1.png"
        className="augmentation-neuron absolute -translate-x-10"
        style={{ opacity: state[0] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n2.png"
        className="augmentation-neuron absolute translate-x-10 translate-y-0"
        style={{ opacity: state[1] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n3.png"
        className="augmentation-neuron absolute translate-x-25 translate-y-4"
        style={{ opacity: state[2] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n4.png"
        className="augmentation-neuron absolute translate-x-40 -translate-y-1"
        style={{ opacity: state[3] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n5.png"
        className="augmentation-neuron absolute -translate-x-5 translate-y-15"
        style={{ opacity: state[4] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n6.png"
        className="augmentation-neuron absolute translate-x-15 translate-y-15"
        style={{ opacity: state[5] ? 1 : 0.2 }}
      />
      <img
        src="/images/features/augmentations/n7.png"
        className="augmentation-neuron absolute translate-x-40 translate-y-12"
        style={{ opacity: state[6] ? 1 : 0.2 }}
      />
    </div>
  );
}

export default Landing;
