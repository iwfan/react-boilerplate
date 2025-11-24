import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <Header />
      <div className="flex flex-col items-center justify-center pt-32">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Vite + React</h1>
        <div className="card bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl rounded-lg p-6 mt-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            count is {count}
          </button>
          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-gray-600 dark:text-gray-400 mt-4">
          Click on the Vite and React logos to learn more
        </p>
        <Button href="/dashboard">Click me</Button>
      </div>
    </div>
  );
};

export default HomePage;
