interface DropdownItem {
  label: string;
  href: string;
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
        <div className="mt-2 py-2 bg-slate-800 border-slate-900 rounded-sm">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:bg-slate-700"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white"></div>
                <span className="font-mono text-xs font-normal">{item.label}</span>
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
    },
    { label: "brainsets", href: "https://github.com/neuro-galaxy/brainsets/" },
    {
      label: "temporaldata",
      href: "https://github.com/neuro-galaxy/temporaldata/",
    },
  ];

  const docsItems = [
    {
      label: "torch_brain",
      href: "https://torch-brain.readthedocs.io/en/latest/",
    },
    { label: "brainsets", href: "https://brainsets.readthedocs.io/en/latest/" },
    {
      label: "temporaldata",
      href: "https://temporaldata.readthedocs.io/en/latest/",
    },
  ];

  return (
    <div
      className="header py-6 border-b-gray-600"
      style={{ borderBottomWidth: "0.5px" }}
    >
      <div className="mx-auto max-w-(--w-wide)">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white"></div>
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
