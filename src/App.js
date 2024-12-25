import Carousel from "./components/Carousel";
import HomeCar from "./components/HomeCar";
import HomeCars from "./components/HomeCars";
import Navbar from "./components/Navbar";
import image from "./images/tesla-robotaxi.jpg";

function App() {
  const handleButtonClick = () => {
    alert("You clicked the button!");
  };
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeCars />
    </>
  );
}

export default App;
