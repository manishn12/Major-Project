import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            {/* <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Abhishek Singh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @meabhisingh. Only with the
              purpose to teach MERN Stack on the channel 6 Pack Programmer
            </span> */}
            <p style={{fontColor:"black", fontSize:"18px"}}>
            The global custom t-shirt printing market size was valued at USD 3.9 billion in 2021 and is expected to expand at a compound annual growth rate (CAGR) of 9.9% from 2022 to 2030. Companies are increasingly using custom-designed t-shirts as a modern branding strategy to brand their company, products, or offerings.

            </p>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Team</Typography>
            <p style={{fontColor:"black", fontSize:"15px"}}>Understanding the potential, we made this as a summer project. Our team includes following members: Ashutosh Jha, Manish Nigam and Aakarsh Nair.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
