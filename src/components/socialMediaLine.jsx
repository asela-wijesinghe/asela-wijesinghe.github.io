import React from "react";
import { SocialIcon } from "react-social-icons";

const socialButtonStyles = {
  backgroundColor: "#fff",
  borderRadius: 25,
  borderStyle: "solid",
  borderColor: "white",
  borderWidth: 2,
  height: 40,
  width: 40,
  margin: 4,
  alignSelf: "center"
};

export const SocialMediaLine = props => (
  <div>
    <br />
    <p className={!props.black ? "connect-text" : "black-text"}>
      Connect with me &nbsp;&nbsp;
    </p>
    <SocialIcon
      style={socialButtonStyles}
      url="https://www.facebook.com/asela.wijesinghe"
    />
    <SocialIcon
      style={socialButtonStyles}
      url="https://www.linkedin.com/in/aselawijesinghe-15ntaps/"
    />
    <SocialIcon
      style={socialButtonStyles}
      url="  https://www.meetup.com/members/220513781/"
      network="meetup"
    />

    <SocialIcon
      style={socialButtonStyles}
      color="#333"
      url="https://github.com/asela-wijesinghe"
    />
    <SocialIcon
      style={socialButtonStyles}
      url="https://stackoverflow.com/users/5472761/aze?tab=profile"
      color="#FF9653"
    />
    <SocialIcon
      style={socialButtonStyles}
      url="https://www.instagram.com/azelawijesinghe/"
      color="#FF4571"
    />
  </div>
);
