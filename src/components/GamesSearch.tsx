import { HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { FormEvent, FormEventHandler, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  onSearch: (searchText: string) => void;
}

const GamesSearch = ({ onSearch }: props) => {
  const search = useRef<HTMLInputElement>(null);

  //   const onSearch = (e: FormEvent) => {
  //     e.preventDefault();

  //     console.log("check the search word===>", search?.current?.value);
  //   };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (search.current) onSearch(search.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          // size="lg"

          ref={search}
          variant="filled"
          placeholder="Basic usage"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default GamesSearch;
