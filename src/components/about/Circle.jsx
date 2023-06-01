import { Typography } from "@mui/material";
import { stack } from "../../assets/icons/myStack.js";
import "./Circle.css";
import { useState } from "react";

const Circle = () => {
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
        className="skill-text"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        toggle to see <br></br>my skills stack
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
