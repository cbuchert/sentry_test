import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("Hey, Sentry! Are you there?");
  }

  return (
    <div>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        {count}
      </button>
    </div>
  );
}

export default App;
