import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import LoremData from "./components/molecules/LoremData";
import LoremPComponent from "./components/molecules/LoremPComponent";
import LoremTaskSection from "./components/molecules/LoremTaskSection";
import LoremChart from "./components/molecules/LoremChart";

export default function Home() {
  return (
    <Box as="main" p={2} maxW="container.xl" mx="auto">
      <Grid
        templateColumns={{
          base: "1fr",
          xl: "1fr 2fr",
        }}
        gap={6}
        minH="calc(100vh - 120px)"
      >
        <GridItem
          as="article"
          bg="cardbg"
          borderRadius="xl"
          p={6}
          boxShadow="sm"
          height={"90vh"}
          minWidth={80}
          overflowY={"auto"}
          divideY="1px"
          divideColor="border"
        >
          <Box mb={5}>
            <Box mb={6}>
              <Heading
                as="h2"
                size="lg"
                mb={4}
                color="success"
                fontSize="1.25rem"
                lineHeight="1.75rem"
              >
                Description
              </Heading>
              <Text color="text" fontSize="14px" lineHeight="1.6">
                Lorem ipsum dolor sit amet consectetur. Aenean sodales
                pellentesque gravida nibh et magna faucibus. Dui commodo ut
                metus amet egestas habitant viverra. Quisque fusce senectus
                facilisis non diam leo nulla sem pellentesque. Sit in vel sed
                cursus metus sit fringilla vestibulum.
              </Text>
            </Box>
            <Box>
              <Heading
                as="h2"
                size="lg"
                mb={4}
                color="success"
                fontSize="1.25rem"
                lineHeight="1.75rem"
              >
                Extra
              </Heading>
              <Text color="text" fontSize="14px" lineHeight="1.6">
                Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing
                fames egestas tellus dis pretium tempus. Justo nisl nisl lorem
                lectus id ornare. Rhoncus in egestas in amet porttitor
                pellentesque sit. Amet gravida integer velit felis. Eu
                consectetur interdum auctor sed aliquam. Eu pulvinar accumsan
                sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum
                velit purus viverra vulputate viverra in nunc nulla. Euismod
                rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel
                etiam. Interdum habitant congue massa in etiam sit. Commodo nibh
                viverra lobortis augue lorem quam lorem suspendisse.
              </Text>
            </Box>
          </Box>
          <LoremData />
          <LoremPComponent />
        </GridItem>

        <GridItem
          as="article"
          bg="cardbg"
          borderRadius="xl"
          p={6}
          boxShadow="sm"
          minH="400px"
        >
          <LoremChart />
          <LoremTaskSection />
        </GridItem>
      </Grid>
    </Box>
  );
}
