import { useState, useEffect } from 'react'
import './index.css'

// STATEFULL
function App() {
  const [dependency1, setDependency1] = useState(1)
  const [dependency2, setDependency2] = useState(1)

  // ciclo de vida: mount (montado), update (actualizaciones), unmount (cuando visitas otra página)
  useEffect(() => {
    console.log("only dependency1", dependency1, dependency2) // mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency1]); // array of dependencies (update)

  useEffect(() => {
    console.log("only dependency2", dependency1, dependency2) // mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency2]);

  useEffect(() => {
    console.log("dependency1 and dependency2", dependency1, dependency2) // mount
  }, [dependency1, dependency2]);

  return (
    <div className="App">
      <button onClick={() => setDependency1((prev) => prev + 1)}>
        Change dependency1
      </button>
      <button onClick={() => setDependency2((prev) => prev + 1)}>
        Change dependency2
      </button>
      <button
        onClick={() => {
          setDependency1((prev) => prev + 1)
          setDependency2((prev) => prev + 1)
        }}
      >
        Change both
      </button>
    </div>
  )
}

export default App
