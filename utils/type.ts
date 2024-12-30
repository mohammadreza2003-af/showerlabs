type navItems = navItem[];

type navItem = {
  title: string;
  path: string;
  sub?: navSub[];
  subWithImg?: navSubWithImg[];
};

type navSub = {
  title: string;
  path: string;
};
type navSubWithImg = {
  title: string;
  path: string;
  img: string;
  description: string;
};

interface NavDropDownProps {
  item: navItem;
  type: string;
  setNavMobileStatus?: (value: { active: boolean; type: string }) => void;
  navMobileStatus?: { active: boolean; type: string };
  toggle?: boolean;
  setToggle?: (value: boolean) => void;
}

type Label = {
  content: string;
};

type product = {
  img: string;
  title: string;
  includes?: string;
  price: number;
  offer: number;
  saveMoney?: boolean;
  id: number;
};

type PurchaseOption = {
  option: string;
  price: number;
  offer: number;
  contains: {
    description: string;
    description2?: string;
    offer?: string;
  };
  hint: string;
  bestValue: boolean;
  products: product[];
};

type FAQ = {
  question: string;
  answer: string;
};

type MiloBrusehoved = {
  miloBrusehovedLabels: Label[];
  description: string;
  purchaseOptions: PurchaseOption[];
  faqs: FAQ[];
};

type miloFilter = {
  description: string;
  purchaseOptions: PurchaseOptionFilter[];
  faqs: FAQ[];
};

type PurchaseOptionFilter = {
  option: string;
  price: number;
  offer: number;
  img: string;
  benefits: string[];
  saveMoney: boolean;
  products: product[];
};

export type {
  NavDropDownProps,
  navItem,
  navItems,
  MiloBrusehoved,
  PurchaseOption,
  miloFilter,
  PurchaseOptionFilter,
  product,
};
