"use client";
import { For, Stack } from "@chakra-ui/react";
import { SidebarItem } from "../atoms/SidebarItem";

export const SidebarNav = ({
  items,
  activePath,
  collapsed,
}: {
  items: Array<{ icon: string; label: string; href: string }>;
  activePath: string;
  collapsed: boolean;
}) => (
  <Stack as="menu" role="menu" flex="1" mt={6}>
    <For each={items} fallback={"loading..."}>
      {(item, i) => (
        <SidebarItem
          collapsed={collapsed}
          key={i}
          icon={item.icon}
          label={item.label}
          href={item.href}
          isActive={item.href === activePath}
        />
      )}
    </For>
  </Stack>
);
