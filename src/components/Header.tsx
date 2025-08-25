interface DropdownItem {
  label: string;
  href: string;
  img_src: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

function Dropdown({ label, items }: DropdownProps) {
  return (
    <div className="relative inline-block group">
      <button className="group-hover:opacity-80">{label} ▾</button>
      <div className="absolute z-10 right-0 invisible group-hover:visible">
        <div className="mt-2 py-2 bg-slate-800 border-slate-900 rounded-sm w-[200px]">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-slate-700"
            >
              <div className="flex items-center gap-2">
                <img className="h-10" src={item.img_src} />
                <span className="font-mono text-xs font-normal">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  const packagesItems = [
    {
      label: "torch_brain",
      href: "https://github.com/neuro-galaxy/torch_brain/",
      img_src: "/images/torchbrain.png",
    },
    {
      label: "brainsets",
      href: "https://github.com/neuro-galaxy/brainsets/",
      img_src: "/images/brainsets.png",
    },
    {
      label: "temporaldata",
      href: "https://github.com/neuro-galaxy/temporaldata/",
      img_src: "/images/temporaldata.png",
    },
  ];

  const docsItems = [
    {
      label: "torch_brain",
      href: "https://torch-brain.readthedocs.io/en/latest/",
      img_src: "/images/torchbrain.png",
    },
    {
      label: "brainsets",
      href: "https://brainsets.readthedocs.io/en/latest/",
      img_src: "/images/brainsets.png",
    },
    {
      label: "temporaldata",
      href: "https://temporaldata.readthedocs.io/en/latest/",
      img_src: "/images/temporaldata.png",
    },
  ];

  return (
    <div
      className="header px-8 py-3 border-b-gray-600"
      style={{ borderBottomWidth: "0.5px" }}
    >
      <div className="mx-auto max-w-(--w-wide)">
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <img className="h-12" src="/images/torchbrain.png" />
            <h1 className="text-xl font-bold">torch brain</h1>
          </div>

          <div className="flex items-center gap-12 font-medium">
            <Dropdown label="Packages" items={packagesItems} />
            <Dropdown label="Docs" items={docsItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
