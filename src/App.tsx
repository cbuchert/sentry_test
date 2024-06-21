import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        {count}
      </button>
    </div>
  );
}

export default App;
