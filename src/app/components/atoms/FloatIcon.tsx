import { Center, Circle, Float } from "@chakra-ui/react";

interface IFloatIcon {
  Icon: React.ReactNode;
  bg: string;
  color: string;
  floatIcon?: React.ReactNode;
  floatIconbg?: string;
}
export const FloatIcon = ({
  Icon,
  bg,
  floatIcon,
  floatIconbg,
}: IFloatIcon) => (
  <Center rounded={50} position="relative" w="80px" h="80px" bg={bg}>
    {Icon}
    {floatIcon && (
      <Float offset={2}>
        <Circle p={2} bg={floatIconbg}>
          {floatIcon}
        </Circle>
      </Float>
    )}
  </Center>
);
