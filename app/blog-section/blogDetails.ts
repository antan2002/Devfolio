
export type blogProps = {
  title: string;
  image: string;
  name: string;
  date: string;
  url: string;
  available: boolean;
  index: number;
};

export const blogDetails = [
  {
    title:
      "Software Engineering Intern",
    image: require(".//../../public/Internship/GoldmanSachs.png"),
    name: "Goldman Sachs",
    date: "Jan 2025",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_3EB88EP4twz7YGGCB_1736528327930_completion_certificate.pdf",
    available: true,
  }, {
    title:
      "Development Intern",
    image: require(".//../../public/Internship/Accenture.png"),
    name: "Accenture",
    date: "Dec 2024",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/XvvYRvb2YpfkyA52H_T6kdcdKSTfg2aotxT_3EB88EP4twz7YGGCB_1734421567266_completion_certificate.pdf",
    available: true,
  },
  {
    title: "Front-End Software-Engineering Intern",
    image: require(".//../../public/Internship/skyscanner.png"),
    name: "Skyscanner",
    date: "Aug 2024 - Sep 2024",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Skyscanner/km4rw7dihDr3etqom_Skyscanner_3EB88EP4twz7YGGCB_1727254537269_completion_certificate.pdf",
    available: true,
  },
  {
    title: "Embedded Engineer",
    image:
      require(".//../../public/Internship/C&N.png"),
    name: "C & N Green Energy Pvt Ltd",
    date: "Aug 2023 - Nov 2025",
    url: "https://cnkbharat.com/",
    available: true,
  },
  {
    title:
      "Contributor",
    image:
      require(".//../../public/Internship/GSOC-2024.png"),
    name: "GirlScript Summer of Code 2024",
    date: "Part-Time",
    url: "https://gssoc.girlscript.tech/",
    available: true,
  },
];
