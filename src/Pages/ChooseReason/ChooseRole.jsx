import React, { useState } from "react";
import "./ChooseRole.css";
import dribbleLogo from "../../assets/dribbleLogo.png";
import inspiration from "../../assets/inpiration.png";
import hire from "../../assets/hire.png";
import designer from "../../assets/designer.png";
import Card from "../../components/Cards/Card";

const ChooseRole = () => {
  const data = [
    {
      path: inspiration,
      title: "I'm looking for design inspiration",
      text: "Seeking design inspiration? Explore fresh ideas and innovative concepts to fuel your creativity. Let us guide you on a journey of innovation. Get ready to bring your vision to life!",
    },
    {
      path: designer,
      title: "I'm a designer looking to share my work",
      text: "Designer passionate about sharing creative work and inspiring others. With an eye for aesthetics and dedication to excellence, I bring projects to life. Excited to connect with fellow enthusiasts.",
    },
    {
      path: hire,
      title: "I'm looking to hire a desinger",
      text: "Seeking a talented designer to join us. We value creativity, collaboration, and attention to detail. If you're passionate about design, let's shape our brand's future together.",
    },
  ];
  return (
    <div className="main">
      <div className="nav">
        <div>
          <img src={dribbleLogo} alt="" className="logo" />
        </div>
      </div>
      <div className="body">
        <div className="form-check cardColletion">
          {data && data.map((set, i) => <Card key={i} value={set} />)}
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
