interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  techs: any[];
  link: string;
}
export const projectList: Project[] = [
    {
        id: 7,
        title: "JetLag2.0",
        description:
          "JetLag is a time difference calculator app that allows users to see the entered time at different timezone by inutition.",
        img: "/images/project/jetlag.png",
        techs: [],
        link: "https://github.com/Billy1106/JetLag2.0",
      },
  {
    id: 6,
    title: "TreasureGunner",
    description:
      "Developed a top-down 2D shooting game in C++. The project was awarded a 98% grade for its innovative gameplay and technical execution.",
    img: "/images/project/treasure.jpeg",
    techs: [],
    link: "https://zenith08.itch.io/treasure-gunner",
  },
  {
    id: 5,
    title: "NativeJobs",
    description:
      "Engineered an online job search mobile application using React Native. Implemented features like job listings, application management, catering to a growing user base.",
    img: "/images/project/native.png",
    techs: [],
    link: "https://github.com/Billy1106/native-jobs",
  },
  {
    id: 1,
    title: "YourToDo",
    description:
      "TODO list web application that you can add, remove, and check the completed task easily.",
    img: "/images/project/YourTodo.jpeg",
    techs: [],
    link: "https://github.com/Billy1106/YourTodo",
  },
  {
    id: 2,
    title: "LaggyZoom",
    description:
      "LaggyZoom that creates intentional lags and image blur to make an execuse to turn off your camera while zooming.",
    img: "/images/project/VideoGenerator.png",
    techs: [],
    link: "https://github.com/Billy1106/portofolio",
  },
  {
    id: 3,
    title: "DNS Lookup Tool",
    description:
      "A DNS client capable of resolving DNS queries of type A, AAAA, MX, NS, and CNAME. Built during the university course.",
    img: "/images/project/coming_soon.jpg",
    techs: [],
    link: "https://github.com/Billy1106/DNSLookUpTool-CPSC317-",
  },
  {
    id: 4,
    title: "Live Streaming Clipper",
    description:
      "Analyses the rate of comments on YouTube live stream and generate clips.",
    img: "/images/project/coming_soon.jpg",
    techs: [],
    link: "https://github.com/Billy1106",
  },
  {
    id: 0,
    title: "Portfolio",
    description: "My first portfolio website created by using React.js.",
    img: "/images/project/my-portfolio.jpg",
    techs: [],
    link: "https://github.com/Billy1106/portofolio",
  },
];
