import { Container, Flex } from "@chakra-ui/react";
import Desc from "./Desc";
import Voxel from "./Voxel";

function About() {
  return (
    <Container p="0" maxW="1600px" h="100vh" id="About">
      <Flex
        h="100%"
        alignItems="center"
        justifyContent="space-around"
        columnGap="10"
        mt="3.5rem"
      >
        <Voxel />
        <Desc />
      </Flex>
    </Container>
  );
}

export default About;
