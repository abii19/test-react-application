import Image_1 from "../../assets/images/image_1.jpeg";
import { Button } from "../shared/Button";

const HomePage = () => {
  console.log(Image_1);
  return (
    <>
      <h1>This is a Home Page</h1>
      <Button
        title="Home Test Button"
        onClick={() => alert("Home Test Button")}
      />
      <br />
      <img src={Image_1} alt="" className="" />
    </>
  );
};

export default HomePage;
