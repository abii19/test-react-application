import Image_1 from "../../assets/images/image_1.jpeg";
import Image_2 from "../../assets/images/image_2.jpg";

const HomePage = () => {
  console.log(Image_1);
  return (
    <>
      <h1>This is a Home Page</h1>
      <img src={Image_1} alt="" className="" />
      <img src={Image_2} alt="" className="" />
    </>
  );
};

export default HomePage;
