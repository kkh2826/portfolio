import { Container, Flex } from "@chakra-ui/react";
import StackItems from "./StackItems";

function Stacks() {
  return (
    <Container p="0" maxW="1200px" h="100vh" id="Stacks">
      <Flex
        h="100%"
        w="100%"
        alignItems="center"
        mt="3.5rem"
        flexDir="column"
        justifyContent="space-around"
      >
        <StackItems />
      </Flex>
    </Container>
  );
}

export default Stacks;
