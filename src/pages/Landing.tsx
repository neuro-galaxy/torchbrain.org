import Header from "../components/Header";

function Landing() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center gap-8 text-center py-24">
        <div className="font-extrabold text-5xl custom-headline">
          Deep Learning on Neural Data,
          <br />
          Supercharged.
        </div>

        <div className="max-w-[700px] text-xl font-extralight text-gray-300">
          Torch Brain is a framework for building the next generation of
          computational neuroscience models, focused on high-performance and
          ease of development.
        </div>
      </div>

      <div className="flex justify-between max-w-[1000px] mx-auto">
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
