export interface TreeNode {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: TreeNode[];
  ip?: string;
}
