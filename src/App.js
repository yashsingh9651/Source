import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <div className="w-screen bg-[#f5deb3]">
    <div className="max-w-[1280px] m-auto">
      <Navbar/>
      <Home/>
    </div>
    </div>
    </>
  );
}

export default App;
