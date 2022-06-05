import { Box, Heading, Link } from "@chakra-ui/react";

/**
 * Logo image made by Figma
 */
function HeaderLogo() {
  return (
    <Box>
      <Heading as={"h1"} fontSize={"2xl"} userSelect="none" cursor={"pointer"}>
        <Link
          href={process.env.REACT_APP_HOME}
          style={{ textDecoration: "none" }}
        >
          {process.env.REACT_APP_NAME}
        </Link>
      </Heading>
    </Box>
  );
}

export default HeaderLogo;
