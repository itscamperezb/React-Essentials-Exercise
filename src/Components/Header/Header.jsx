import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const variableWord = ["Fundamental", "Core", "Basics"];

function change() {
  return Math.floor(Math.random() * variableWord.length);
}

function Header() {
  const description = variableWord[change()];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
