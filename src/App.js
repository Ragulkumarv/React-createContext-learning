import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 bg-gray-100 dark:bg-gray-900`}
    >
      <header className="flex justify-between items-center w-full px-6 py-4 bg-gray-200 dark:bg-gray-800 shadow-lg transition-colors duration-500">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-500">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {theme === "light" ? (
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a9.96 9.96 0 016.93 2.93m0 14.14A9.96 9.96 0 0112 22a9.96 9.96 0 01-6.93-2.93m13.86 0A9.96 9.96 0 0022 12a9.96 9.96 0 00-2.93-6.93m0 0A9.96 9.96 0 0012 2c-2.69 0-5.15 1.03-7.07 2.93m0 0A9.96 9.96 0 002 12c0 2.69 1.03 5.15 2.93 7.07"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m8.66-12.34l-.71.71m-13.9 0l-.71-.71m16.97 6.97h-1m-16 0h-1m8.66 8.66l-.71-.71m13.9 0l-.71.71m0-13.9l.71-.71m-13.9 0l.71.71"
              ></path>
            </svg>
          )}
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 transition-colors duration-500">
          This is a {theme === "light" ? "light" : "dark"} themed page. Enjoy
          the visual effects!
        </p>
      </main>
      <footer className="py-4 bg-gray-200 dark:bg-gray-800 w-full flex justify-center transition-colors duration-500">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Your Company
        </p>
      </footer>
    </div>
  );
};

export default App;
