import React from "react";
import bulls from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;

  const emojiList: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bulls, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiList[rating]} marginTop={2} />;
};

export default Emoji;
