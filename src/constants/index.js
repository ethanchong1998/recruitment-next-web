import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

//header nav links
const navLinks = [
  {
    id: 1,
    title: "For jobseekers",
  },
  {
    id: 2,
    title: "For clients",
  },
  {
    id: 3,
    title: "Sectors",
  },
  {
    id: 4,
    title: "Resources",
  },
];

//partners
const partners = [
  {
    id: 1,
    name: "microsoft",
    image: "/partners/microsoft.png",
  },
  {
    id: 2,
    name: "oracle",
    image: "/partners/oracle.png",
  },
  {
    id: 3,
    name: "atlassian",
    image: "/partners/atlassian.png",
  },
  {
    id: 4,
    name: "cloudflare",
    image: "/partners/cloudflare.png",
  },
  {
    id: 5,
    name: "vmware",
    image: "/partners/vmware.png",
  },
];

// job lists
const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    skill: "Python",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    posted: "29/08/2023",
  },
  {
    id: 2,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    skill: "Python",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    posted: "29/08/2023",
  },
  {
    id: 3,
    title: "Software Engineer",
    location: "London",
    salary: "£65,000",
    skill: "Python",
    description:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    posted: "29/08/2023",
  },
];
// footer social links
const socialLinks = [
  {
    id: 1,
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    href: "#",
    icon: <FaFacebook />,
  },
  {
    id: 3,
    href: "#",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    href: "#",
    icon: <FaTwitter />,
  },
];

// footer links
const footerLinks = [
  {
    id: 1,
    title: "Explore",
    links: [
      {
        id: 1,
        href: "#",
        text: "Homepage",
      },
      {
        id: 2,
        href: "#",
        text: "For jobseekers",
      },
      {
        id: 3,
        href: "#",
        text: "For clients",
      },
      {
        id: 4,
        href: "#",
        text: "Our sectors",
      },
      {
        id: 5,
        href: "#",
        text: "Resources",
      },
      {
        id: 6,
        href: "#",
        text: "Contact us",
      },
    ],
  },
  {
    id: 2,
    title: "Sectors",
    links: [
      {
        id: 1,
        href: "#",
        text: "Software engineering",
      },
      {
        id: 2,
        href: "#",
        text: "DevOps",
      },
      {
        id: 3,
        href: "#",
        text: "Cloud",
      },
      {
        id: 4,
        href: "#",
        text: "Infrastructure",
      },
      {
        id: 5,
        href: "#",
        text: "Testing",
      },
      {
        id: 6,
        href: "#",
        text: "Security",
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    links: [
      {
        id: 1,
        href: "#",
        text: "Nav item",
      },
      {
        id: 2,
        href: "#",
        text: "Nav item",
      },
      {
        id: 3,
        href: "#",
        text: "Nav item",
      },
      {
        id: 4,
        href: "#",
        text: "Nav item",
      },
    ],
  },
];

export { navLinks, socialLinks, footerLinks, partners, jobs };
