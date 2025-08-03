import { loremData } from "@/app/datas/dummydatas";
import { Box, Flex, For, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LoremData = () => {
  return (
    <Box pt={3}>
      <For each={loremData} fallback={"loading..."}>
        {(data, i) => (
          <Flex
            key={i}
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Heading as="h2" size="md" mb={4} fontSize={15} color="text">
              {data.title}
            </Heading>
            <Flex direction={"row"} alignItems="center">
              {data.icon && data.icon}
              <Text ml={2}>{data.value}</Text>
            </Flex>
          </Flex>
        )}
      </For>
    </Box>
  );
};

export default LoremData;
