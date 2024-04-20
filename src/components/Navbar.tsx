import { Box, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import GamesSearch from "./GamesSearch";

interface props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: props) => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px" />

      <GamesSearch onSearch={onSearch}/>

      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
