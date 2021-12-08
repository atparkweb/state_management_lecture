function Attributes({ attrs }) {
  const {
    strength,
    intelligence,
    wisdom,
    dexterity,
    constitution,
    charm,
    perception
  } = attrs;

  return (
    <div className="attribute-card">
      <dl>
        <dt><abbr title="strength">Str</abbr></dt><dd>{strength}</dd>
        <dt><abbr title="intelligence">Str</abbr></dt><dd>{intelligence}</dd>
        <dt><abbr title="wisdom">Str</abbr></dt><dd>{wisdom}</dd>
        <dt><abbr title="dexterity">Str</abbr></dt><dd>{dexterity}</dd>
        <dt><abbr title="constitution">Str</abbr></dt><dd>{constitution}</dd>
        <dt><abbr title="charm">Str</abbr></dt><dd>{charm}</dd>
        <dt><abbr title="perception">Str</abbr></dt><dd>{perception}</dd>
      </dl>
    </div>
  );
}

export default Attributes;