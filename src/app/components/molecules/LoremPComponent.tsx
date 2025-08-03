import { lorempData } from "@/app/datas/dummydatas";
import { Box, For, Heading } from "@chakra-ui/react";
import { LorempCard } from "../atoms/LoremPCard";

const LoremPComponent = () => {
  return (
    <Box mt={3} pt={3}>
      <Heading as="h2" mb={3} fontSize={15}>
        Lorem ipsum dolor sit
      </Heading>
      <Box spaceY={4}>
        <For each={lorempData} fallback={"loading..."}>
          {(item, i) => (
            <LorempCard
              key={i}
              heading="Lorem P"
              shortDesc={item.shortDesc}
              title={item.title}
              desc={item.desc}
            />
          )}
        </For>
      </Box>
    </Box>
  );
};

export default LoremPComponent;
