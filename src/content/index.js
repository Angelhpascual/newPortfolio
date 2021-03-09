export default {
  nav: {
    logo: "Angelhpascual",
    links: [
      { text: "Projects", to: "work" },
      { text: "Contact", to: "mycontact" },
    ],
  },
  header: {
    img:
      "https://avatars.githubusercontent.com/u/15203307?s=460&u=bded44228f24cdbb112a59bfbadad08e02002c6f&v=4",

    text: ["Hi!", "It's me Ángel.", "I am "],
    typical: [
      "Web Developer. 🖥",
      2000,
      "Streamer. 📹",
      2000,
      "Musician 🎸 ",
      2000,
    ],
    btnText: "Discover Me",
  },

  stack: {
    title: "Stack",
    tech: [
      {
        img: process.env.PUBLIC_URL + "/logo512.png",
        alt: "react",
        to: "https://reactjs.org/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/nextjs.png",
        alt: "nextjs",
        to: "https://nextjs.org/",
      },

      {
        img: process.env.PUBLIC_URL + "/assets/tailwind.png",
        alt: "tailwind",
        to: "https://tailwindcss.com/",
      },
      {
        img: process.env.PUBLIC_URL + "/assets/gatsby.png",
        alt: "gatsby",
        to: "https://www.gatsbyjs.com/",
      },
    ],
    desc: `Web Developer by day, Rebel agent by night`,
  },
  contact: {
    title: "Contact Me!",
    desc:
      "Hello there! My name is Ángel. I am a padawan developer discovering the ways of the code.",
    socials: [
      {
        alt: "github",
        img: process.env.PUBLIC_URL + "/assets/github.png",
        to: "https://github.com/Angelhpascual",
      },
      {
        alt: "link",
        img: process.env.PUBLIC_URL + "/assets/link.png",
        to: "https://www.linkedin.com/in/angelhpascual/",
      },
      {
        alt: "gmail",
        img: process.env.PUBLIC_URL + "/assets/gmail.png",
        to: "mailto:angelhpascual@gmail.com",
      },
    ],
    img:
      "https://avatars.githubusercontent.com/u/15203307?s=460&u=bded44228f24cdbb112a59bfbadad08e02002c6f&v=4",
  },
};
