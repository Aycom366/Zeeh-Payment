import Authentication from "../component/TabsChildren/Authentication";

interface IProps {
  children?: any;
  label: string;
}

export const TabValues: IProps[] = [
  {
    label: "Authentication",
    children: Authentication,
  },
  {
    label: "Finance",
    children: Authentication,
  },
  {
    label: "Direct Debit",
    children: Authentication,
  },
  {
    label: "Universal Card",
    children: Authentication,
  },
  {
    label: "Payment",
    children: Authentication,
  },
];
