import { Check, Server, ShieldX, Users, VenetianMask } from "lucide-react";
import { FloatIcon } from "../components/atoms/FloatIcon";
import { TreeNode } from "../types/type";

export const navItems = [
  {
    icon: "/icons/menu.svg",
    label: "Home",
    href: "/",
  },
  {
    icon: "/icons/warning.svg",
    label: "Lorem",
    href: "/#",
  },
  {
    icon: "/icons/box.svg",
    label: "Documents",
    href: "/#",
  },
  {
    icon: "/icons/menu3.svg",
    label: "Settings",
    href: "/#",
  },
  {
    icon: "/icons/plug.svg",
    label: "Settings",
    href: "/#",
  },
  {
    icon: "/icons/document.svg",
    label: "Settings",
    href: "/#",
  },
  {
    icon: "/icons/menu2.svg",
    label: "Settings",
    href: "/#",
  },
];

export const loremData = [
  { title: "Lorem ipsum dolor", value: "Ut" },
  { title: "Lorem ipsum dolor", value: "Eros" },
  {
    title: "Lorem ipsum dolor",
    value: "Yes",
    icon: <Check size={15} strokeWidth={3.5} color="green" />,
  },
  { title: "Lorem ipsum dolor", value: "Sit" },
  { title: "Lorem ipsum dolor", value: "Lorem ipsum dolor" },
  { title: "Lorem ipsum dolor", value: "Lorem ipsum dolor" },
];

export const lorempData = [
  {
    name: "Server",
    title: "server",
    shortDesc: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    name: "Server",
    title: "server",
    shortDesc: "Lorem ipsum dolor sit amet consectetur.",
    desc: "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.",
  },
];

export const loremTreeNode: TreeNode = {
  title: "Loremipsumm",
  icon: (
    <FloatIcon
      Icon={<VenetianMask color="#e5372b" size={36} />}
      bg="lightorange"
      color="orange"
      floatIcon={<Users color="white" size={12} />}
      floatIconbg="#7a44ff"
    />
  ),
  children: [
    {
      title: "Loremipsu",
      icon: (
        <FloatIcon
          Icon={<Server color="#1774de" size={36} />}
          bg="lightblue"
          color="blue"
        />
      ),
      children: [
        {
          title: "Loremipsu",
          icon: (
            <FloatIcon
              Icon={<Server color="#1774de" size={36} />}
              bg="lightblue"
              color="blue"
            />
          ),
          children: [
            {
              title: "Loremipsumdolorsit",
              icon: (
                <FloatIcon
                  Icon={<Server color="#1774de" size={36} />}
                  bg="lightblue"
                  color="blue"
                  floatIcon={<ShieldX color="white" size={13} />}
                  floatIconbg="danger"
                />
              ),

              id: "9861f3c5-d268-464e-8366-7db80f0c670f",
              children: [],
              ip: "192.168.1.1",
            },
            {
              title: "Loremipsumdolorsit002",
              icon: (
                <FloatIcon
                  Icon={<Server color="#1774de" size={36} />}
                  bg="lightblue"
                  color="blue"
                  floatIcon={<ShieldX color="white" size={13} />}
                  floatIconbg="danger"
                />
              ),
              id: "3e92b0e1-8234-4bc7-906b-062bfbcd6a45",
              children: [],
              ip: "192.168.1.2",
            },
          ],
          id: "d4e08d33-fd90-4497-a34f-64eaf9dfc18b",
        },
      ],
      id: "0a2b7d7d-571f-4e19-8d4a-62c16b2c2f71",
    },
  ],
  id: "4f13b3e2-1a68-4874-94ec-99debd16a8cc",
};

export const securityLevel = [
  { label: "Critical", value: 2, labelColor: "#C6190D" },
  { label: "High", value: 0, labelColor: "#E5372B" },
  { label: "Medium", value: 0, labelColor: "#EBA622" },
  { label: "Low", value: 0, labelColor: "#08B94E" },
];

export const loremImg = [
  "/loremdanger.svg",
  "/loremwarning.svg",
  "/loremsuccess.svg",
];
