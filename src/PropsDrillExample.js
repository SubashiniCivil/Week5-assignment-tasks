import React from "react";

export default function PropsDrillExample() {
  const username = "XYZ";

  return <Parent name={username} />;
}

function Parent({ name }) {
  return <Child name={name} />;
}

function Child({ name }) {
  return <GrandChild name={name} />;
}

function GrandChild({ name }) {
  return <div className="card">GrandChild: Hello {name}</div>;
}
