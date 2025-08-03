"use client";
import { Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { Server } from "lucide-react";
import { css } from "../../../../styled-system/css";
import { circle } from "../../../../styled-system/patterns";

interface ILorempCard {
  heading: string;
  title: string;
  shortDesc: string;
  desc?: string;
}
export const LorempCard = ({
  heading,
  shortDesc,
  title,
  desc,
}: ILorempCard) => {
  return (
    <Card.Root>
      <Card.Body gap="2">
        <Card.Title mt="2" fontSize={15}>
          {heading}
        </Card.Title>
        <Grid
          templateColumns="repeat(2, 1fr)"
          divideX="1px"
          divideColor="border"
          bg="gridCard"
          rounded={10}
          p={2}
          alignItems="center"
        >
          <Flex alignItems="center">
            <Box
              className={circle({
                bg: "#d7eaff",
                width: "52.9px",
                height: "52.9px",
                mr: "2",
              })}
            >
              <Server strokeWidth={2.5} color="#1774de" />
            </Box>
            <Box>
              <Heading
                className={css({
                  fontSize: "12.15px",
                  fontWeight: "700",
                  lineHeight: "13.5px",
                })}
                as="h4"
              >
                Server
              </Heading>
              <Text className={css({ fontSize: "9.45px" })}>{title}</Text>
            </Box>
          </Flex>
          <Text className={css({ fontSize: "13px", fontWeight: 400, pl: 4 })}>
            {shortDesc}
          </Text>
        </Grid>
        <Card.Description
          className={css({
            fontSize: "15px",
            lineHeight: "22px",
            color: "text",
          })}
        >
          {desc}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};
