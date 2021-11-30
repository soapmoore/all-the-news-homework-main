import React from "react";
import Story from "../story";
import { SectionHead } from "./styles";

const Stories = ({ section, stories }) => {
  return (
    <div className="site-wrap">
      <SectionHead>{section}</SectionHead>
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
};

export default Stories;
