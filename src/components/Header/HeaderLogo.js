import { Box, Heading } from "@chakra-ui/react";

/**
 * Logo image made by Figma
 */
function HeaderLogo() {
  return (
    <Box>
      <Heading as={"h1"} fontSize={"2xl"}>
        {process.env.REACT_APP_NAME}
      </Heading>
    </Box>
  );
}

export default HeaderLogo;
