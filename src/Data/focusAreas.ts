import * as React from "react";
import { LoremIpsum } from "lorem-ipsum";

import Launch from "@material-ui/icons/Launch";
import IconCourse from "../Icons/IconCourse";
import SvgIcon from "@material-ui/core/SvgIcon";
import learningExperiences from "./learningExperiences";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const makeProps = (props?: any) => {
  return {
    name: props && props.name ? props.name : lorem.generateSentences(1),
    description:
      props && props.description
        ? props.description
        : lorem.generateSentences(4)
  };
};

export const items = [
  makeProps({
    name: "Change Management",
    learningExperiences: learningExperiences.items
  }),
  makeProps({
    name: "Leadership Skills",
    learningExperiences: learningExperiences.items
  })
];

export default { items };
