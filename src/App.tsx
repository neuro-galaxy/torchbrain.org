function App() {
  return (
    <div>
      {/* Header */}
      <div
        className="header py-6 border-b-gray-400"
        style={{ borderBottomWidth: "1px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1550px" }}>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-white"></div>
              <h1 className="text-3xl font-bold text-white">torch brain</h1>
            </div>

            <div className="flex items-center gap-12 text-white text-lg">
              <a>Packages</a>
              <a>Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
