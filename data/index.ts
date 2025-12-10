import p5 from "../public/P5.webp";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I work closely with clients to build clean, scalable, and reliable digital products.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with global time zones and open communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "Consistently learning & improving my craft",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-Stack & Mobile App Developer",
    description:
      "Software engineer passionate about building modern web apps, mobile apps, and scalable backend systems.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building volunteer-management and fintech apps",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Got a project in mind? Let's build it together.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "IFAKARA CHILDREN HEALING HANDS — NGO Website",
    des: "A modern NGO website designed for programs, donations, and outreach.",
    img: "/Ifakara.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://www.ichh.or.tz/",
    github: "https://github.com/BrayceDominic",
  },
  {
    id: 2,
    title: "Babra’s Kitchen — Food Ordering System",
    des: "A complete food ordering and menu listing application.",
    img: "/barbra.jpeg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://babraskitchen.42web.io/",
    github: "https://github.com/BrayceDominic",
  },
  {
    id: 3,
    title: "Mwipopo Medical Shop",
    des: "A modern online pharmacy & medical product application.",
    img: "/Mwipopo.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://mwipopomedicalshop.vercel.app/",
    github: "https://github.com/BrayceDominic",
  },
  {
    id: 4,
    title: "Zubeda Sakuru Portfolio",
    des: "A branded digital presence for an entrepreneur",
    img: "/download.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://zubedasakuru.vercel.app/",
    github: "https://github.com/BrayceDominic",
  },
  {
    id: 5,
    title: "VolunTrack — Volunteer Management App",
    des: "A full system for volunteer management built with React Native, Node.js, and MySQL.",
    img: "/vt.png",
    iconLists: ["/re.svg", "/node.webp", "/mysql.svg"],
    link: "",
    github: "https://github.com/BrayceDominic/VolunTrack",
  },
];

export const testimonials = [
  {
    quote:
      "Brayce is a talented full-stack developer with strong problem-solving skills. His ability to turn ideas into working products is impressive.",
    img: "martins.jpg",
    name: "Client Testimonial",
    title: "Business Owner",
  },
  {
    quote:
      "Professional, creative, and delivers on time. Working with Brayce elevated our digital presence significantly.",
    img: "ogechuku.jpg",
    name: "Client Feedback",
    title: "Entrepreneur",
  },
];

export const companies = [
  {
    id: 1,
    name: "melodia",
    img: "/melodia.webp",
  },
  {
    id: 2,
    name: "megatek",
    img: "/megatek.webp",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Developer",
    desc: "Built full-stack systems and applications using React, Node.js, PHP, MySQL, and Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Developer",
    desc: "Developed and deployed mobile apps using React Native (Expo Go) and Flutter.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Software Developer",
    desc: "Delivered real-world client projects including websites, systems, and mobile apps.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Systems Designer",
    desc: "Designed scalable backend architecture for SaaS applications and APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/BrayceDominic",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/novyrab", // You didn’t provide Twitter
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://linkedin.com/in/brayce-dominic-9652a8263",
  },
];
