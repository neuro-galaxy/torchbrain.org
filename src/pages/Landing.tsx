import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center gap-8 text-center pt-32 pb-24 custom-headline-bg">
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

      <div className="flex justify-around max-w-(--w-wide) mx-auto mb-32">
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
          description="High-performance neural data format"
          href="https://github.com/neuro-galaxy/temporaldata"
          img_src="/images/temporaldata.png"
        />
      </div>

      <div className="flex flex-wrap gap-[25px] justify-center mt-20 w-(--w-wide) mx-auto">
        <div className="w-[500px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Multi-recording training
          </span>
          <div className="w-60 h-50"></div>
          <span className="font-extralight text-center">
            Train foundation models on multiple datasets
          </span>
        </div>

        <div className="w-[200px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Based on PyTorch
          </span>
          <img
            className="h-24"
            src="/images/pytorch.png"
            alt="PyTorch logo"
          ></img>
          <span className="font-extralight text-center">
            Carry over your deep learning expertise
          </span>
        </div>

        <div className="w-[550px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Advanced Data Samplers
          </span>
          <FeatureCardSamplers />
          <span className="font-extralight text-center">
            Sample data slices in continuous time
          </span>
        </div>

        <div className="w-[550px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Optimized data-loading pipelines
          </span>
          <div className="w-60 h-60"></div>
          <span className="font-extralight text-center max-w-[400px]">
            Stream data directly from disk during training. Train on datasets
            bigger than your memory limit
          </span>
        </div>

        <div className="w-[550px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Transforms and Augmentations
          </span>
          <div className="w-60 h-40"></div>
          <span className="font-extralight text-center max-w-[400px]">
            A collection of transforms and augmentations like spike binning and
            neuron dropout.
          </span>
        </div>
      </div>

      <div className="w-full h-50"></div>
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
  const [samplerState, setSamplerState] = useState<FeatureCardSamplerState>({
    length: 20,
    num_samples: 10,
    visible: Array(10).fill(false), // Start with all false
    offset: 0.0,
  });

  const animate = () => {
    setSamplerState(prevState => {
      // Create a new array with all values set to false
      const newVisible = [...prevState.visible];
      // Randomly select one index to set to true
      // Get indices where visible is false
      const falseIndices = prevState.visible
        .map((visible, index) => visible ? null : index)
        .filter(index => index !== null) as number[];
      
      // Only proceed if there are false indices to choose from
      if (falseIndices.length === 0) return initState();
      
      const idx = falseIndices[Math.floor(Math.random() * falseIndices.length)];
      newVisible[idx] = true;
      
      return {
        ...prevState,
        visible: newVisible
      };
    });
  }

  const initState = () => {
    const total_length = 500;
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

  }

  useEffect(() => {
    const state = initState();
    setSamplerState(state);

    const id = setInterval(animate, 200); // Slower interval for better visibility
    return () => clearInterval(id);
  }, []); // Remove setSamplerState from dependencies

  return (
    <div className="w-[500px] flex flex-col justify-center">
      <div className="h-[80px] border-b-[0.5px] flex">
        {Array.from(Array(samplerState.num_samples).keys()).map((i) => (
          <div
            key={i} 
            className="h-full custom-sample-block"
            style={{
              transform: `translateX(${samplerState.offset}px)`,
              width: `${samplerState.length}px`,
              opacity: samplerState.visible[i] ? 1 : 0, 
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

export default Landing;
