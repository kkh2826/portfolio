import { Box, Flex, Image, Text, Icon, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { stacks } from "../../helpers";

function Layout({ names }) {
  return names?.map((name) => (
    <Box w="100%" key={name}>
      <Flex alignItems="center" gap="1rem">
        <Icon w={6} h={6} as={stacks[name].icon} />
        <Text fontSize="2xl">{name.toUpperCase()}</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt="1rem">
        {stacks[name].filenames.map((fn) => (
          <Center
            key={fn}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            borderRadius="15px"
            w="170px"
            h="170px"
            transition="0.2s"
            _hover={{
              transform: "scale(1.1)",
              backgroundColor: "rgba(227, 227, 227, 0.6)",
            }}
          >
            <Image
              boxSize="150px"
              src={`https://cdn.jsdelivr.net/gh/kkh2826/portfolio_content@master/images/${fn}.svg`}
              alt={`${fn} 사진`}
            />
          </Center>
        ))}
      </Flex>
    </Box>
  ));
}

function StackItems() {
  const [names, setNames] = useState(null);

  useEffect(() => {
    const keys = Object.keys(stacks);

    setNames(keys);
  }, []);

  return <Layout names={names} />;
}

export default StackItems;
