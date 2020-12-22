import "./App.css";
import Image from "./components/Image";
import shoes from "./images/shoes.jpg";

function App() {
  return (
    <div className="App">
      <div className="app__categories">
        <div className="app__categories__gallery--1">
          <Image title={shoes} elementNumber="1" />
          <Image title={shoes} elementNumber="2" />
          <Image title={shoes} elementNumber="3" />
          <Image title={shoes} elementNumber="4" />
          <Image title={shoes} elementNumber="5" />
          <Image title={shoes} elementNumber="6" />
        </div>
      </div>
    </div>
  );
}

export default App;
