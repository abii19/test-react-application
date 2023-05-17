import Image_1 from "../../assets/images/image_1.jpeg";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";

const HomePage = () => {
  return (
    <>
      <h1>This is a Home Page</h1>
      <Button
        title="Home Test Button"
        onClick={() => alert("Home Test Button")}
      />
      <br />

      <Card
        src={Image_1}
        title="This is a first card"
        description="sequi, veniam esse dicta recusandae. Minus impedit delectus amet id dolorem voluptatum a nam, cupiditate pariatur odio omnis ducimus?"
        link="https://www.nepalnews.com/s/business/gbia-marks-its-first-anniversary-but-is-yet-to-come-into-full-operation"
      />
      <Card
        src={Image_1}
        title="This is a second card"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptates excepturi"
        link="https://www.nepalnews.com/s/travel-and-tourism/public-transport-fare-decreased"
      />
      <Card
        src={Image_1}
        title="This is a third card"
        description="consectetur adipisicing elit. Ipsa voluptates excepturi"
        link="https://www.nepalnews.com/s/travel-and-tourism/tumlingtar-airport-welcomes-72-seater-atr-aircraft"
      />
      <br />
      <img src={Image_1} alt="" className="" />
    </>
  );
};

export default HomePage;
