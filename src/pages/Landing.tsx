import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center gap-8 text-center pt-32 pb-16 custom-headline-bg">
        <div className="font-extrabold text-6xl custom-headline">
          Deep Learning on Neural Data,
          <br />
          Supercharged.
        </div>

        <div className="mt-8 max-w-[900px] text-2xl font-extralight text-gray-300">
          Torch Brain is an ecosystem for building the next generation of
          computational neuroscience models, focused on high-performance and
          ease of development.
        </div>
      </div>

      <div className="flex justify-around max-w-(--w-wide) mx-auto my-16">
        <PackageCard
          title="torch_brain"
          description="DL pipeline building blocks and models"
          href="https://github.com/neuro-galaxy/torch_brain"
          img_src="/images/torchbrain.png"
        />
        <PackageCard
          title="brainsets"
          description="A collection of neural datasets"
          href="https://github.com/neuro-galaxy/brainsets"
          img_src="/images/brainsets.png"
        />
        <PackageCard
          title="temporaldata"
          description="Easy-to-use interface for neural data"
          href="https://github.com/neuro-galaxy/temporaldata"
          img_src="/images/temporaldata.png"
        />
      </div>

      <div className="flex flex-col mx-auto py-16 max-w-(--w-wide)">
        <span className="text-center font-bold text-3xl custom-headline">
          Features
        </span>

        <div className="flex flex-wrap justify-center gap-[25px] mt-8">
          <div className="w-[440px] custom-feature-box">
            <span className="font-bold text-xl text-center">
              Multi-recording training
            </span>
            <img
              className="h-50 my-10"
              src="/images/features/multi-recording-training.png"
            />
            <span className="font-extralight text-lg text-center">
              Train foundation models on multiple datasets
            </span>
          </div>

          <div className="w-[230px] custom-feature-box">
            <span className="font-bold text-xl text-center">
              Based on PyTorch
            </span>
            <img
              className="h-32 my-4"
              src="/images/pytorch.png"
              alt="PyTorch logo"
            ></img>
            <span className="font-extralight text-lg text-center">
              Carry over your deep learning expertise
            </span>
          </div>

          <div className="w-[500px] custom-feature-box">
            <span className="font-bold text-xl text-center">
              Advanced Data Samplers
            </span>
            <FeatureCardSamplers />
            <span className="font-extralight text-lg text-center">
              Sample arbitrary data slices in continuous time
            </span>
          </div>

          <div className="w-[500px] custom-feature-box">
            <span className="font-bold text-xl text-center">
              Transforms and Augmentations
            </span>
            <FeatureCardAugmentation />
            <span className="font-extralight text-lg text-center max-w-[400px]">
              A collection of transforms and augmentations like spike binning
              and neuron dropout.
            </span>
          </div>

          <div className="w-[550px] custom-feature-box">
            <span className="font-bold text-xl text-center">
              Optimized data-loading pipelines
            </span>
            <img
              className="h-48 my-12"
              src="/images/features/optimized-data-loading.png"
            />
            <span className="font-extralight text-lg text-center max-w-[400px]">
              Stream data directly from disk during training. Train on datasets
              bigger than your memory limit
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col mx-auto py-16 max-w-(--w-wide)"
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
    <a className="flex flex-col items-center" href={href}>
      <img
        className="h-50 transition delay-0 duration-150 ease-in-out hover:-translate-y-1.5"
        src={img_src}
      ></img>
      <span className="mt-4 font-mono font-bold text-xl">{title}</span>
      <span className="mt-1">{description}</span>
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
      className="=flex flex-col justify-center"
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
    <div className="w-60 h-45 relative">
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
