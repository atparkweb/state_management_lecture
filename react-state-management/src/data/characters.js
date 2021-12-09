const getCharacters = () => {
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
        int: { value: 15, mod: 1 },
        wis: { value: 14, mod: 0 },
        dex: { value: 4, mod: -1 },
        cha: { value: 8, mod: 0 },
        con: { value: 10, mod: 0 }
      },
    },
    {
      id: 2,
      name: "Romandrian",
      race: "Half-elf",
      klass: "Barbarian",
      level: 5,
      alignment: "Lawful Neutral",
      background: "Soldier",
      hp: 30,
      attrs: {
        str: { value: 18, mod: 2 },
        int: { value: 10, mod: 0 },
        wis: { value: 8, mod: 0 },
        dex: { value: 8, mod: 0 },
        cha: { value: 10, mod: 0 },
        con: { value: 13, mod: 1 }
      },
    },
    {
      id: 3,
      name: "Analala",
      race: "Elf",
      klass: "Cleric",
      level: 5,
      alignment: "Lawful Good",
      background: "Noble",
      hp: 14,
      attrs: {
        str: { value: 8, mod: 0 },
        int: { value: 15, mod: 1 },
        wis: { value: 12, mod: 1 },
        dex: { value: 8, mod: 0 },
        cha: { value: 17, mod: 2 },
        con: { value: 11, mod: 0 }
      }
    },
    {
      id: 4,
      name: "Rikaard",
      race: "Dwarf",
      klass: "Rogue",
      level: 5,
      alignment: "Chaotic Neutral",
      background: "Bounty Hunter",
      hp: 16,
      attrs: {
        str: { value: 11, mod: 0 },
        int: { value: 8, mod: 0 },
        wis: { value: 5, mod: -1 },
        dex: { value: 16, mod: 2 },
        cha: { value: 14, mod: 0 },
        con: { value: 9, mod: 0 }
      }
    },
    {
      id: 5,
      name: "Wesleorg",
      race: "Gnome",
      klass: "Warlock",
      level: 5,
      alignment: "Lawful Evil",
      background: "Criminal",
      hp: 12,
      attrs: {
        str: { value: 8, mod: 0 },
        int: { value: 18, mod: 2 },
        wis: { value: 8, mod: 0 },
        dex: { value: 10, mod: 0 },
        cha: { value: 7, mod: -1 },
        con: { value: 9, mod: 0 }
      }
    }
  ];
};

export { getCharacters }