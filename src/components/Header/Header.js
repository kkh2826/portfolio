import { Container, Flex } from "@chakra-ui/react"
import HeaderLogo from "./HeaderLogo"
import Navigation from "./Navigation"

function Header() {
  return (
    <Container maxW={"4xl"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <HeaderLogo />
        <Navigation />
      </Flex>
    </Container>
  )
}

export default Header