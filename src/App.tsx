import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useBearStore from "./store/useBearStore";
import shallow from "zustand/shallow";

function App() {
  const [count, setCount] = useState(0);
  const bears = useBearStore((state) => state.bears);
  const { bears: another } = useBearStore((state) => ({ bears: state.bears }), shallow);

  return <h1 className="text-3xl font-bold underline">Hello world!{bears}</h1>;
}

export default App;
