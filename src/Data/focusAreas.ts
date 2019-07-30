import { LoremIpsum } from "lorem-ipsum";
import learningExperiences from "./learningExperiences";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 2
  }
});

const makeProps = (props?: any) => {
  return {
    name: props && props.name ? props.name : lorem.generateSentences(1),
    description:
      props && props.description
        ? props.description
        : lorem.generateSentences(4),
    learningExperiences:
      props && props.learningExperiences
        ? props.learningExperiences
        : learningExperiences.items
  };
};

export const items = [
  makeProps({
    name: "Change Management",
    learningExperiences: learningExperiences.items
  }),
  makeProps({
    name: "Leadership Skills",
    learningExperiences: learningExperiences.moreItems
  })
];

export default { items };
