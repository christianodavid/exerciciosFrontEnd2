import Card from "./components/Card";
import Window from "./components/Window";

function App() {
  return (
    <div>
      <Window>
        <Card student="Christiano David" mean="9.0" />
        <Card student="Gabriela Daniel" mean="6.0" />
        <Card student="Marina Medeiros" mean="7.5" />
        <Card student="Natália Machado" mean="10.0" />
      </Window>
    </div>
  );
}

export default App;
