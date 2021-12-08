import Character from "./components/Character";

function App() {
  const andy = {
    name: "Brandalf",
    race: "Half-orc",
    klass: "Sorcerer",
    level: 5,
    alignment: "Chaotic Good",
    background: "Soldier",
    hp: 30,
    attrs: {
      str: { value: 8, mod: 0 },
      int: { value: 15, mod: 0 },
      wis: { value: 14, mod: 0 },
      dex: { value: 8, mod: 0 },
      cha: { value: 4, mod: 0 },
      con: { value: 10, mod: 0 }
    },
  }

  return (
    <div className="App">
      <Character data={andy} />
    </div>
  );
}

export default App;
