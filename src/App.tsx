function App() {
  return (
    <div>
      {/* Header */}
      <div
        className="header py-6 border-b-gray-600"
        style={{ borderBottomWidth: "0.5px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1550px" }}>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white"></div>
              <h1 className="text-xl font-bold text-white">torch brain</h1>
            </div>

            <div className="flex items-center gap-12 text-white font-medium">
              <a href="test">Packages</a>
              <a href="test">Docs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
