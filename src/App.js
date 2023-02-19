import "./App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quae velit labore? Odit possimus numquam quos consequuntur quam saepe eaque molestiae atque, qui, modi accusantium blanditiis dolores adipisci maxime magnam.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>React Context 🍕</Title>
      <Switch />
    </header>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>Page Title comes here</Title>
      <Content />
    </div>
  );
};

function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
