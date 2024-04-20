import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
// import { Platform } from "../hooks/useGames";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface props {
  onSelectPlatform: (platform: Platform) => void;
}

const GamesDropdown = ({ onSelectPlatform }: props) => {
  const { data, error, isLoading } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(item);
              //   console.log(item);
            }}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GamesDropdown;
