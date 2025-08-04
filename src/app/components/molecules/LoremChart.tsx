"use client";
import { loremImg, loremTreeNode } from "@/app/datas/dummydatas";
import { Box, Flex, For, Grid, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { Tree } from "./Tree";

const LoremChart = () => {
  return (
    <Box>
      <Heading as="h2" mb={3} color="success">
        Lorem Lorem Lorem
      </Heading>
      <Grid width="100%" rounded={20} bg="gridCard">
        <Box
          maxWidth={"100%"}
          overflowX="scroll"
          p={2}
          m={"auto"}
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Tree node={loremTreeNode} />
        </Box>
        <hr className={css({ ml: 5, mr: 5 })} />
        <Flex mt={2}>
          <For each={loremImg}>
            {(img, i) => (
              <Image alt={img} key={i} src={img} height={38} width={105} />
            )}
          </For>
        </Flex>
      </Grid>
    </Box>
  );
};

export default LoremChart;
