const getPlayers = () => {
  return [
    {
      id: 1,
      name: "Briandalf",
      race: "Half-orc",
      klass: "Sorcerer",
      level: 5,
      alignment: "Chaotic Evil",
      background: "Hermit",
      hp: 12,
      attrs: {
        str: { value: 8, mod: 0 },
        int: { value: 15, mod: 0 },
        wis: { value: 14, mod: 0 },
        dex: { value: 8, mod: 0 },
        cha: { value: 8, mod: 0 },
        con: { value: 10, mod: 0 }
      },
    },
    {
      id: 2,
      name: "Romandrian",
      race: "Dwarf",
      klass: "Barbarian",
      level: 6,
      alignment: "Lawful Neutral",
      background: "Soldier",
      hp: 30,
      attrs: {
        str: { value: 18, mod: 0 },
        int: { value: 10, mod: 0 },
        wis: { value: 8, mod: 0 },
        dex: { value: 8, mod: 0 },
        cha: { value: 10, mod: 0 },
        con: { value: 13, mod: 0 }
      },
    },
    {
      id: 3,
      name: "Analala",
      race: "Elf",
      klass: "Cleric",
      level: 8,
      alignment: "Lawful Good",
      background: "Noble",
      hp: 14,
      attrs: {
        str: { value: 8, mod: 0 },
        int: { value: 15, mod: 0 },
        wis: { value: 15, mod: 0 },
        dex: { value: 8, mod: 0 },
        cha: { value: 17, mod: 0 },
        con: { value: 11, mod: 0 }
      }
    },
    {
      id: 4,
      name: "Rikaard",
      race: "Human",
      klass: "Rogue",
      level: 3,
      alignment: "Chaotic Neutral",
      background: "Bounty Hunter",
      hp: 16,
      attrs: {
        str: { value: 11, mod: 0 },
        int: { value: 11, mod: 0 },
        wis: { value: 8, mod: 0 },
        dex: { value: 16, mod: 0 },
        cha: { value: 14, mod: 0 },
        con: { value: 9, mod: 0 }
      }
    },
    {
      id: 5,
      name: "Weswasi",
      race: "Gnome",
      klass: "Warlock",
      level: 4,
      alignment: "Lawful Evil",
      background: "Criminal",
      hp: 12,
      attrs: {
        str: { value: 8, mod: 0 },
        int: { value: 18, mod: 0 },
        wis: { value: 10, mod: 0 },
        dex: { value: 10, mod: 0 },
        cha: { value: 7, mod: 0 },
        con: { value: 9, mod: 0 }
      }
    }
  ];
};

export { getPlayers }