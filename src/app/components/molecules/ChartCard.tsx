import { securityLevel } from "@/app/datas/dummydatas";
import { Box, Circle, Flex, For, Heading, Text } from "@chakra-ui/react";
import { Dot } from "lucide-react";

const ChartCard = () => {
  return (
    <Box borderWidth={1} rounded={20} py={4} px={7}>
      <Heading color="text">Contextual Risk</Heading>
      <Flex justifyContent="space-between" alignItems="center">
        <Box spaceY={2.5}>
          <For each={securityLevel}>
            {(level, i) => (
              <Flex key={i}>
                <Dot size={25} strokeWidth={5} color={level.labelColor} />
                <Text fontWeight={700}>{level.value}</Text>
                <Text ml={1}>{level.label}</Text>
              </Flex>
            )}
          </For>
        </Box>
        <Circle
          height="149px"
          width="149px"
          borderWidth="7px"
          borderColor="#C6190D"
          color="#C6190D"
          fontSize="4xl"
          fontWeight="bold"
        >
          <Text color="text">2</Text>
        </Circle>
      </Flex>
    </Box>
  );
};

export default ChartCard;
