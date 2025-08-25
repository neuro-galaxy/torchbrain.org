import { useState } from "react";
import Header from "../components/Header";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center gap-8 text-center py-32 custom-headline-bg">
        <div className="font-extrabold text-6xl custom-headline">
          Deep Learning on Neural Data,
          <br />
          Supercharged.
        </div>

        <div className="max-w-[900px] text-2xl font-extralight text-gray-300">
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
          <FeatureCardSamplers/>
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
  visible: boolean[];
}

function FeatureCardSamplers() {
  // useState(FeatureCardSamplerState)
  return <div className="w-[500px] h-40">

  </div>;
}

export default Landing;
