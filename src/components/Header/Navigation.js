import { HStack, Link, Text } from "@chakra-ui/react";
import { useCallback } from "react";

/**
 *
 * Navigation Link 추가하기
 */

const sections = ["About", "Skills", "Portfolio", "Contact"];

function Navigation() {
  const linkNavi = useCallback(() => {
    return sections.map((section) => (
      <Link
        key={section}
        href={`#${section}`}
        style={{
          textDecorationColor: "gray",
          textDecorationThickness: "3px",
        }}
      >
        <Text fontSize={"lg"}>{section}</Text>
      </Link>
    ));
  }, []);
  return <HStack spacing={"3rem"}>{linkNavi()}</HStack>;
}

export default Navigation;
