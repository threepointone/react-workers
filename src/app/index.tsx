import { createContext, useContext } from 'react';

const LiveContext = createContext<number | null>(null);

export default function App() {
  return (
    <LiveContext.Provider value={1}>
      <Counter />
    </LiveContext.Provider>
  );
}

function useLiveValues() {
  const values = new Map();
}

// ok we're going to some fancy useState stuff

function useState(initialValue: number) {}

// let's also try useEffect

function useEffect(callback: () => void, dependencies: unknown[]) {}

// // and context

// function createContext(initialValue: any){

// }

// function useContext(context: any){

// }

function Counter() {
  const value = useContext(LiveContext);
  return <div>{value}</div>;
}
