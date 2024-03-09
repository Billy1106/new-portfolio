export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  techs: any[];
  sourceLink: string;
  demoLink: string;
}
export const projectList: Project[] = [
  {
    id: 8,
    title: "EasyKanban",
    description:
      "A full-stack web app to enhance task and project management.",
    img: "/images/project/EasyKanban.png",
    techs: [],
    sourceLink: "https://github.com/Billy1106/EasyKanban",
    demoLink: "https://main.d39bs8224nr2i8.amplifyapp.com/",
  },
  {
    id: 7,
    title: "JetLag2.0",
    description:
      "JetLag is a time difference calculator app that allows users to see the entered time at different timezone by inutition.",
    img: "/images/project/jetlag.png",
    techs: [],
    sourceLink: "https://github.com/Billy1106/JetLag2.0",
    demoLink: "https://billy1106.github.io/JetLag2.0/",
  },
  {
    id: 6,
    title: "TreasureGunner",
    description:
      "A top-down 2D shooting game in C++, awarded a 98% grade for its innovative gameplay and technical execution.",
    img: "/images/project/treasure.jpeg",
    techs: [],
    sourceLink: "https://github.com/CPSC427-2023-Team-10/Treasure-Gunner",
    demoLink: "https://zenith08.itch.io/treasure-gunner",
  },
  {
    id: 5,
    title: "NativeJobs",
    description:
      "An online job search mobile application using React Native and FastAPI.",
    img: "/images/project/native.png",
    techs: [],
    sourceLink: "https://github.com/Billy1106/native-jobs",
    demoLink: "",
  },
  {
    id: 1,
    title: "YourToDo",
    description:
      "TODO list web application that you can add, remove, and check the completed task easily.",
    img: "/images/project/YourTodo.jpeg",
    techs: [],
    sourceLink: "https://github.com/Billy1106/YourTodo",
    demoLink: "https://my-todo-391e5.web.app/",
  },
  {
    id: 2,
    title: "LaggyZoom",
    description:
      "LaggyZoom that creates intentional lags and image blur to make an execuse to turn off your camera while zooming.",
    img: "/images/project/VideoGenerator.png",
    techs: [],
    sourceLink: "https://github.com/Billy1106/portofolio",
    demoLink: "",
  },
  {
    id: 3,
    title: "DNS Lookup Tool",
    description:
      "A DNS client capable of resolving DNS queries of type A, AAAA, MX, NS, and CNAME. Built during the university course.",
    img: "/images/project/coming_soon.jpg",
    techs: [],
    sourceLink: "https://github.com/Billy1106/DNSLookUpTool-CPSC317-",
    demoLink: "",
  },
  {
    id: 4,
    title: "Live Streaming Clipper",
    description:
      "Analyses the rate of comments on YouTube live stream and generate clips.",
    img: "/images/project/coming_soon.jpg",
    techs: [],
    sourceLink: "https://github.com/Billy1106",
    demoLink: "",
  },
  {
    id: 0,
    title: "Portfolio1.0",
    description: "My first portfolio website created by using React.js.",
    img: "/images/project/my-portfolio.jpg",
    techs: [],
    sourceLink: "https://github.com/Billy1106/portofolio",
    demoLink: "https://billy1106.github.io/portfolio/",
  },
  {
    id: 8,
    title: "Portfolio2.0",
    description: "My current portfolio website created by using Nuxt3.js.",
    img: "/images/project/new-portfolio.png",
    techs: [],
    sourceLink: "https://billy1106.github.io/portfolio",
    demoLink: "https://main.d1uyzpfa3abnrd.amplifyapp.com",
  },
];
