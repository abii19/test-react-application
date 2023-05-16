import { ReactComponent as FBIcon } from "../../assets/icons/facebook.svg";

import { FacebookIcon } from "../../assets/icons";

import * as Icons from "../../assets/icons";
import { Button } from "../shared/Button";

const ContactPage = () => {
  return (
    <>
      <h1>This is a Contact Page</h1>
      <Button
        title="Contact Test Button"
        onClick={() => alert("Contact Test Button")}
        variant="danger"
      />
      <br />
      <FacebookIcon className="facebook-icon" />
      <FBIcon className="facebook-icon" />
      <Icons.TwitterIcon className="twitter-icon" />
    </>
  );
};

export default ContactPage;
