import { TreeNode } from "@/app/types/type";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TreeProps {
  node: TreeNode;
  level?: number;
  isLast?: boolean;
}

export const Tree = ({ node, level = 0, isLast = false }: TreeProps) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <Box width={"100%"}>
      <Flex direction="row" align="center" position="relative">
        {level >= 1 &&
          node.children?.length <= 2 &&
          node.children?.length !== 0 && (
            <Image
              src="/arrow.svg"
              alt="connector"
              width={60}
              height={20}
              style={{ margin: "0 -2px" }}
            />
          )}

        <Flex direction="column" align="center" mx={2}>
          <Box textAlign="center">
            {node.icon}
            <Text fontSize="xs">{node.title}</Text>
          </Box>
        </Flex>

        {hasChildren && node.children?.length === 2 ? (
          <>
            <Image
              src="/arrow2.svg"
              alt="branch connector"
              width={120}
              height={100}
            />

            <Flex flexDirection="column" gap={7}>
              {node.children.map((child, index) => (
                <Tree
                  key={child.id}
                  node={child}
                  level={level + 1}
                  isLast={index === node.children.length - 1}
                />
              ))}
            </Flex>
          </>
        ) : (
          <Flex align="center" ml={4}>
            {node.children?.map((child, index) => (
              <Box key={child.id} position="relative">
                <Tree
                  node={child}
                  level={level + 1}
                  isLast={index === node.children!.length - 1}
                />
              </Box>
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
