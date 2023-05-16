import { Image_1 } from "../../assets/images";

import * as Images from "../../assets/images";
import { Button } from "../shared/Button";

const AboutPage = () => {
  return (
    <>
      <h1>This is a About Page</h1>
      <Button
        title="About Test Button"
        onClick={() => alert("About Test Button")}
        variant="primary"
      />
      <br />
      <img src={Images.Image_3} alt="" className="" />
      <img src={Image_1} alt="" className="" />
      <img src={Images.Image_2} alt="" className="" />
    </>
  );
};

export default AboutPage;
