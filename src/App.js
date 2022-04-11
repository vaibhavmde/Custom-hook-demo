import useColor from "./useColor";
import "./styles.css";
export default function App() {
  const { color, changeColor } = useColor();
  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", backgroundColor: `#${color}` }}
    >
      <button onClick={changeColor}>change</button>
    </div>
  );
}
