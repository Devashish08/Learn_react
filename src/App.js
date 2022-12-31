import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About " />
      <div className="container">
        <Textform heading="Enter The Text to analyze" />
        <About/>
      </div>
    </>
  );
}

export default App;
