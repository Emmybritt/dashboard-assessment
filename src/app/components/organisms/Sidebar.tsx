"use client";
import { navItems } from "@/app/datas/dummydatas";
import {
  Box,
  Flex,
  Grid,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import ToggleSidebarBtn from "../atoms/ToggleSidebarBtn";
import { SidebarFooter } from "../molecules/SidebarFooter";
import { SidebarNav } from "./SidebarNavLinks";
import { X } from "lucide-react";

export const Sidebar = () => {
  const { open, onClose, onToggle } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const sidebarWidth = open
    ? isMobile
      ? "100%"
      : "250px"
    : isMobile
    ? "0px"
    : "80px";

  const collapsed = !open;

  return (
    <Grid position="relative">
      <ToggleSidebarBtn
        btnRef={btnRef}
        isMobile={isMobile ?? false}
        onToggle={onToggle}
        open={open}
      />

      <Box
        as="nav"
        aria-label="Main navigation"
        position={{ base: "fixed", md: "relative" }}
        top="0"
        left="0"
        bottom="0"
        w={sidebarWidth}
        bg="cardbg"
        border={"#ccc"}
        borderWidth={1}
        boxShadow={{ base: open ? "xl" : "none", md: "none" }}
        zIndex="sticky"
        transform={{
          base: open ? "translateX(0)" : "translateX(-100%)",
          md: "none",
        }}
        transition="all 0.1s ease-out"
        overflow="hidden"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Flex direction="column" h="full" p="4">
          <SidebarNav items={navItems} activePath="/" collapsed={collapsed} />
          <SidebarFooter collapsed={collapsed} />
        </Flex>
      </Box>

      {isMobile && open && (
        <IconButton
          color="red"
          position="fixed"
          right={5}
          onClick={onClose}
          aria-hidden="true"
          zIndex="overlay"
        >
          <X color="#ac6c6c" strokeWidth={2.5} />
        </IconButton>
      )}
    </Grid>
  );
};
