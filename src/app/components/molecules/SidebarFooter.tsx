"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Flex, For, Text } from "@chakra-ui/react";
import { SidebarItem } from "../atoms/SidebarItem";
import { Tooltip } from "@/components/ui/tooltip";

import Image from "next/image";

export const SidebarFooter = ({ collapsed }: { collapsed: boolean }) => (
  <Box divideY="1px">
    <Box pb={collapsed ? 4 : 10}>
      <For
        each={[
          {
            label: "Lorem",
            icon: "/icons/setting.svg",
            href: "/#",
          },
          {
            label: "Lorem",
            icon: "/icons/action.svg",
            href: "/#",
          },
        ]}
      >
        {(item, i) => (
          <Tooltip
            key={i}
            content={item.label}
            disabled={!collapsed}
            positioning={{ placement: "right" }}
          >
            <SidebarItem
              key={i}
              icon={item.icon}
              label={collapsed ? "" : item.label}
              href={item.href}
              collapsed={collapsed}
            />
          </Tooltip>
        )}
      </For>
    </Box>
    <Flex
      px={collapsed ? 2 : 4}
      py={collapsed ? 2 : 4}
      alignItems="center"
      justifyContent={collapsed ? "center" : "space-between"}
      flexDirection={collapsed ? "column" : "row"}
      gap={collapsed ? 2 : 0}
    >
      <Flex
        gap={2}
        mt={collapsed ? 0 : 3}
        alignItems="center"
        flexDirection={collapsed ? "column" : "row"}
      >
        <Image
          alt="user"
          src="/user.svg"
          height={collapsed ? 32 : 48}
          width={collapsed ? 32 : 48}
        />
        {!collapsed && (
          <Box>
            <Text fontSize={14}>Lorem</Text>
            <Text fontSize={14}>Lorem</Text>
          </Box>
        )}
      </Flex>
      <Box>
        <ColorModeButton size={collapsed ? "sm" : "md"} />
      </Box>
    </Flex>
  </Box>
);
