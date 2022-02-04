const getCharacters = () => {
  return [
    {
      id: 1,
      name: "Trougar",
      race: "Dragonborn",
      jobClass: "Bard",
      level: 5,
      alignment: "Chaotic Good",
      background: "Far Traveler",
      hitPoints: 12,
      attributes: {
        strength: { value: 8, mod: 0 },
        intelligence: { value: 15, mod: 1 },
        wisdom: { value: 14, mod: 0 },
        dexterity: { value: 4, mod: -1 },
        charisma: { value: 8, mod: 0 },
        constitution: { value: 10, mod: 0 }
      },
    },
    {
      id: 2,
      name: "Swan",
      race: "Half-elf",
      jobClass: "Paladin",
      level: 1,
      alignment: "Lawful Good",
      background: "Acolyte",
      hitPoints: 20,
      attributes: {
        strength: { value: 18, mod: 2 },
        intelligence: { value: 10, mod: 0 },
        wisdom: { value: 8, mod: 0 },
        dexterity: { value: 8, mod: 0 },
        charisma: { value: 10, mod: 0 },
        constitution: { value: 13, mod: 1 }
      },
    },
    {
      id: 3,
      name: "Balto",
      race: "Gnome",
      jobClass: "Wizard",
      level: 1,
      alignment: "Neutral Good",
      background: "Folk Hero",
      hitPoints: 14,
      attributes: {
        strength: { value: 8, mod: 0 },
        intelligence: { value: 15, mod: 1 },
        wisdom: { value: 12, mod: 1 },
        dexterity: { value: 8, mod: 0 },
        charisma: { value: 17, mod: 2 },
        constitution: { value: 11, mod: 0 }
      }
    },
    {
      id: 4,
      name: "Thorin",
      race: "Dwarf",
      jobClass: "Druid",
      level: 1,
      alignment: "Neutral",
      background: "Hermit",
      hitPoints: 16,
      attributes: {
        strength: { value: 11, mod: 0 },
        intelligence: { value: 8, mod: 0 },
        wisdom: { value: 5, mod: -1 },
        dexterity: { value: 16, mod: 2 },
        charisma: { value: 14, mod: 0 },
        constitution: { value: 9, mod: 0 }
      }
    },
    {
      id: 5,
      name: "Hron",
      race: "Human",
      jobClass: "Rogue",
      level: 1,
      alignment: "Lawful Evil",
      background: "Criminal",
      hitPoints: 10,
      attributes: {
        strength: { value: 8, mod: 0 },
        intelligence: { value: 18, mod: 2 },
        wisdom: { value: 8, mod: 0 },
        dexterity: { value: 10, mod: 0 },
        charisma: { value: 7, mod: -1 },
        constitution: { value: 9, mod: 0 }
      }
    }
  ];
};

export { getCharacters }
