import { Box, IconButton } from "@chakra-ui/react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

interface IToggleSidebarBtn {
  isMobile: boolean;
  open: boolean;
  btnRef: React.Ref<HTMLButtonElement>;
  onToggle: () => void;
}
const ToggleSidebarBtn = ({
  isMobile,
  btnRef,
  open,
  onToggle,
}: IToggleSidebarBtn) => {
  return (
    <>
      {isMobile && (
        <Box bg="red">
          <IconButton
            ref={btnRef}
            onClick={onToggle}
            aria-label={open ? "Close sidebar" : "Open sidebar"}
            variant="plain"
            position="fixed"
            top="4"
            left="4"
            zIndex="10"
          >
            <AlignJustify color="#ac6c6c" strokeWidth={2.5} size={25} />
          </IconButton>
        </Box>
      )}

      {!isMobile && (
        <IconButton
          ref={btnRef}
          onClick={onToggle}
          aria-label={open ? "Close sidebar" : "Open sidebar"}
          variant="plain"
          position="absolute"
          top="10"
          right={-5}
          zIndex="overlay"
          transition="left 0.2s ease-in-out"
        >
          <Image
            alt="Collapser"
            src="/icons/collapser.svg"
            height={32}
            width={32}
          />
        </IconButton>
      )}
    </>
  );
};

export default ToggleSidebarBtn;
