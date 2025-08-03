"use client";
import { Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Tooltip } from "@/components/ui/tooltip";

export const SidebarItem = ({
  icon,
  label,
  href,
  isActive,
  collapsed,
}: {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
  collapsed: boolean;
}) => (
  <Tooltip
    content={label}
    positioning={{ placement: "right" }}
    showArrow
    disabled={!collapsed}
  >
    <Link
      href={href}
      display="flex"
      alignItems="center"
      px={collapsed ? "3" : "4"}
      py={collapsed ? "2" : "1.5"}
      borderRadius="md"
      bg={isActive ? "lightgreen" : "transparent"}
      color={isActive ? "#334155" : "gray"}
      _hover={{
        textDecoration: "none",
        bg: isActive ? "lightgreen" : "gray.100",
      }}
      role="menuitem"
      aria-current={isActive ? "page" : undefined}
      justifyContent={collapsed ? "center" : "flex-start"}
      w="full"
      gap={collapsed ? "0" : "3"}
    >
      <Box>
        <Image alt={label} src={icon} width={20} height={20} />
      </Box>
      {!collapsed && (
        <Text
          fontWeight="medium"
          color={isActive ? "#334155" : "text"}
          fontSize="sm"
        >
          {label}
        </Text>
      )}
    </Link>
  </Tooltip>
);
