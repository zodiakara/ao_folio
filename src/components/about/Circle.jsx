import { Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import "./Circle.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Circle = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const radius = 250; // Radius of the circle
  const angle = (2 * Math.PI) / stack.length; // Angle between each image

  return (
    <div
      className="circle"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "white",
          marginTop: "75px",
        }}
      >
        {t("aboutpage-circle-part-one")}
        <br></br>
        {t("aboutpage-circle-part-two")}
      </Typography>

      {toggle &&
        stack.map((skill, index) => (
          <img
            key={skill}
            src={skill.icon}
            alt={skill.name}
            className="circle-image"
            style={{
              left: `${radius * Math.cos(index * angle) + radius - 175}px`,
              top: `${radius * Math.sin(index * angle) + radius - 175}px`,
            }}
          />
        ))}
    </div>
  );
};

export default Circle;
