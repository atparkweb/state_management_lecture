import { getAttributes } from "../data/attributes";

/* this is a state-less component */
function Attributes({ attributes }) {
  const attributeItems = (attrs) => {
    let content = [];
    const attributes = getAttributes();
  
    for (const key in attributes) {
      content.push(
        <li key={key} className="attr-card-item">
          <abbr title={attributes[key]} className="attr-card-key">{key}: </abbr>
          <span className="attr-card-value">{attrs[key].value} ({attrs[key].mod})</span>
        </li>
      );
    }
  
    return content;
  }

  return (
    <div className="attr-card">
      <ul>{attributeItems(attributes)}</ul>
    </div>
  );
}

export default Attributes;
