import {
  ListBulletIcon,
  CurrencyDollarIcon,
    PhoneIcon,
  CalculatorIcon
} from "@heroicons/react/24/solid";


export const navBarItems = [
  {
    id: 1,
    title: "Features",
    icon: <ListBulletIcon className="w-6 h-6 text-orange-500" />,
    href: '/features'
    },
    {
    id: 2,
    title: "Pricing",
      icon: <CurrencyDollarIcon className="w-6 h-6 text-orange-500" />,
    href: '/pricing'
    },
    {
    id: 3,
    title: "Services",
      icon: <CalculatorIcon className="w-6 h-6 text-orange-500" />,
    href:'/services'
    },
    {
    id: 4,
    title: "Contact Us",
      icon: <PhoneIcon className="w-6 h-6 text-orange-500" />,
    href:'/contactUs'
  },

  
];