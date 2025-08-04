"use client";
import {
  Box,
  ButtonGroup,
  Center,
  Circle,
  Flex,
  IconButton,
  Pagination,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { Server } from "lucide-react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export const LoremTable = () => {
  const items = [
    {
      id: 1,
      name: "Loremipsumdolorsit",
      category: "Critical",
      ip: "192.168.1.1",
    },
    {
      id: 2,
      name: "Loremipsumdolorsit002",
      category: "Critical",
      ip: "192.168.1.2",
    },
  ];

  return (
    <Box width="100%" overflowX="auto">
      <Stack borderWidth={1} rounded={20} gap="5" width="100%">
        <Table.Root roundedTop={20} width="100%" variant="outline" size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader
                color="text"
                fontWeight={600}
                minWidth="150px"
              >
                Asset
              </Table.ColumnHeader>
              <Table.ColumnHeader
                color="text"
                fontWeight={600}
                textAlign="end"
                minWidth="120px"
              >
                Contextual Risk
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Flex alignItems="center" gap={3}>
                    <Circle
                      size={{ base: "36px", md: "44px" }}
                      bg="lightblue"
                      flexShrink={0}
                    >
                      <Server color="#1774de" size={20} />
                    </Circle>
                    <Box>
                      <Text
                        fontSize="clamp(0.75rem, 2vw, 0.875rem)"
                        minWidth="0"
                      >
                        {item.name}
                      </Text>
                      <Text fontSize="9.45px" color="text">
                        {item.ip}
                      </Text>
                    </Box>
                  </Flex>
                </Table.Cell>
                <Table.Cell textAlign="end">
                  <Flex
                    bg="#fee2e0"
                    rounded={20}
                    justifyContent="center"
                    px={3}
                    py={1}
                    width="fit-content"
                    ml="auto"
                  >
                    <Text
                      color="#C6190D"
                      fontSize="clamp(0.75rem, 2vw, 0.875rem)"
                      fontWeight={700}
                    >
                      {item.category}
                    </Text>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <Pagination.Root count={items.length * 5} pageSize={5} page={1}>
          <Center>
            <ButtonGroup variant="ghost" size="sm">
              <Pagination.PrevTrigger asChild>
                <IconButton aria-label="Previous page">
                  <LuChevronLeft />
                </IconButton>
              </Pagination.PrevTrigger>
              <Pagination.PageText format="long" flex="1" />
              <Pagination.NextTrigger asChild>
                <IconButton aria-label="Next page">
                  <LuChevronRight />
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Center>
        </Pagination.Root>
      </Stack>
    </Box>
  );
};
