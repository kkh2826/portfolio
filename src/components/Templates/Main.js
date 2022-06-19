import { Container } from "@chakra-ui/react";
import { About } from "../About";
import { Header } from "../Header";
import { Stacks } from "../Stacks";

function Main() {
  return (
    <Container maxW={"full"}>
      <Header />
      <About />
      <Stacks />
    </Container>
  );
}

export default Main;
