import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

interface props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortGames = ({ onSelectSortOrder }: props) => {
  const menulist = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        {menulist.map((menu) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(menu.value);
            }}
          >
            {menu.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortGames;
