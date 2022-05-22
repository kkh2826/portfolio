import { HStack, Text } from "@chakra-ui/react"

/**
 * 
 * Navigation Link 추가하기
 */
function Navigation() {
  return (
    <HStack spacing={"3rem"}>
        <Text fontSize={"lg"}>About</Text>
        <Text fontSize={"lg"}>Skills</Text>
        <Text fontSize={"lg"}>Portfolio</Text>
        <Text fontSize={"lg"}>Contact</Text>
    </HStack>
  )
}

export default Navigation