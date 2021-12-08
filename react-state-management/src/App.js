import Character from "./components/Character";

function App() {
  const andy = {
    name: "Brandalf",
    race: "half-orc",
    klass: "sorcerer",
    hp: 30,
    level: 5,
    attrs: {
      strength: 8,
      intelligence: 17,
      wisdom: 14,
      dexterity: 8,
      charisma: 4,
      constitution: 10,
      perception: 11
    },
    status: {
      bonuses: [],
      penalties: []
    }
  }

  return (
    <div className="App">
      <Character data={andy} />
    </div>
  );
}

export default App;
