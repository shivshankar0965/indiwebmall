import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input } from "@chakra-ui/react";

const Search = () => {
  return (
    <>
      <Box
        bg="white"
        display={"flex"}
        width="80%"
        alignItems={"center"}
        p={"2"}
        border={"2px solid lightgray"}
        borderRadius={"md"}
      >
        <Input color={"black"} border="none" bg="white" placeholder="Search" />
        <SearchIcon w={5} h={5} color="gray.300" mt="1%" pos="relative" />
      </Box>
    </>
  );
};
export default Search;
