import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface props {
  platform: Platform[];
}

const PlatformIconsList = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack margin={2}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.400" />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
