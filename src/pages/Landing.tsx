import Header from "../components/Header";
import "./Landing.css";

function Landing() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center gap-8 text-center py-32 custom-headline-bg">
        <div className="font-extrabold text-5xl custom-headline">
          Deep Learning on Neural Data,
          <br />
          Supercharged.
        </div>

        <div className="max-w-[700px] text-xl font-extralight text-gray-300">
          Torch Brain is an ecosystem for building the next generation of
          computational neuroscience models, focused on high-performance and
          ease of development.
        </div>
      </div>

      <div className="flex justify-between max-w-[1000px] mx-auto mb-32">
        <PackageCard
          title="torch_brain"
          description="DL pipeline building blocks and models"
        />
        <PackageCard
          title="brainsets"
          description="A collection of neural datasets"
        />
        <PackageCard
          title="temporaldata"
          description="High-performance neural data format"
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
          <div className="w-60 h-32"></div>
          <span className="font-extralight text-center">
            Carry over your deep learning expertise
          </span>
        </div>

        <div className="w-[550px] custom-feature-box">
          <span className="font-bold text-lg text-center">
            Advanced Data Samplers
          </span>
          <div className="w-60 h-40"></div>
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
          A collection of transforms and augmentations like spike binning and neuron dropout.
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
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-40 h-40 bg-white"></div>
      <span className="mt-4 font-mono font-bold text-xl">{title}</span>
      <span className="mt-1">{description}</span>
    </div>
  );
}

export default Landing;
