import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />

      <div className="text-center font-extrabold text-5xl py-24 custom-headline">
        Deep Learning on Neural Data,
        <br />
        Supercharged.
      </div>

      <div className="flex justify-between max-w-[1000px] mx-auto">
        <PackageCard
          title="torch_brain"
          description="DL pipeline building blocks and models."
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
      <span className="mt-2 font-mono font-bold text-lg">{title}</span>
      <span>{description}</span>
    </div>
  );
}

export default App;
