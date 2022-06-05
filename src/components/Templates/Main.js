import { Container } from "@chakra-ui/react";
import { About } from "../About";
import { Header } from "../Header";

function Main() {
  return (
    <Container maxW={"full"}>
      <Header />
      <About />
      <Container h="100vh" id="Skills">
        asd
      </Container>
    </Container>
  );
}

export default Main;
