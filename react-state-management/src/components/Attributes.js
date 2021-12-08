const attributes = {
  str: "strength",
  int: "intelligence",
  con: "constitution",
  wis: "wisdom",
  dex: "dexterity",
  cha: "charisma"
};

function attributeItems(attrs) {
  let content = [];

  for (const key in  attributes) {
    content.push(
      <li key={key}>
        <abbr title={attributes[key]}>{key}: </abbr>
        <span>{attrs[key].value} ({attrs[key].mod})</span>
      </li>
    )
  }

  return content;
}

function Attributes({ attributes }) {
  return (
    <div className="attribute-card">
      <dl>{attributeItems(attributes)}</dl>
    </div>
  );
}

export default Attributes;