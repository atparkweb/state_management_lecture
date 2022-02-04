/* this is a state-less component */
function Attributes({ attributes }) {
  return (
    <div className="attr-card">
      <ul>{attributeItems(attributes)}</ul>
    </div>
  );
}

function attributeItems(attributes) {
  let content = [];

  for (const key in attributes) {
    content.push(
        <li key={key} className="attr-card-item">
          <span className="attr-card-key">{key}:</span>
          <span className="attr-card-value">{attributes[key].value} ({attributes[key].mod})</span>
        </li>
    );
  }

  return content;
};

export default Attributes;
