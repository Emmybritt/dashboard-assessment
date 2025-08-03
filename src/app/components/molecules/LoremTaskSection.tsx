import { Box, Container, Grid, Heading } from "@chakra-ui/react";
import ChartCard from "./ChartCard";
import { LoremTable } from "./LoremTable";

const LoremTaskSection = () => {
  return (
    <Container>
      <Heading as="h2" mt={6} mb={3} color="success">
        Lorem ipsum dolor sit
      </Heading>
      <Box
        overflowX="auto"
        overflowY="hidden"
        maxW="100%"
        w="100%"
        rounded={20}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            xl: "1fr 1fr",
          }}
          gap={6}
        >
          <LoremTable />
          <ChartCard />
        </Grid>
      </Box>
    </Container>
  );
};

export default LoremTaskSection;
