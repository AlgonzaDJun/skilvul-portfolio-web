const porto = [
  {
    id: 1,
    title: "Food Corner",
    image: "./img/projects/e-canteen.png",
    desc: "Website E-Canteen yang dikembangkan menggunakan MERN stack (MongoDB, Express.js, React, dan Node.js). Website ini memungkinkan pengguna untuk melakukan pemesanan makanan atau minuman secara online dengan mudah dan efisien.",
    gitLink: "https://github.com/AlgonzaDJun/Food-Corner",
    demoLink: "https://blue-bewildered-swallow.cyclic.app",
    icon: [
      //   <DiMongodb key={1} color="green" />,
      //   <SiExpress key={2} color="black" />,
      //   <DiReact key={3} color="#62d4fa" />,
      //   <DiNodejsSmall key={4} color="green" />,
    ],
  },
  {
    id: 2,
    title: "J-Commerce",
    image: "./img/projects/aj-store.png",
    image2: "/images/porto-img/2b.jpeg",
    desc: "Website (frontend) E-Commerce alat elektronik yang dikembangkan menggunakan ReactJS",
    gitLink: "https://github.com/AlgonzaDJun/J-Commerce",
    demoLink: "https://j-commerce.netlify.app",
    icon: [
      //   <DiReact key={1} color="#62d4fa" />,
      //   <SiMui key={2} color="#3477ea" style={{ backgroundColor: "white" }} />,
      //   <SiRedux key={3} color="white" style={{ backgroundColor: "#764abc" }} />,
    ],
  },
  {
    id: 3,
    title: "Travel Website",
    image: "./img/projects/travel-web.png",
    image2: "/images/porto-img/4b.png",
    image3: "/images/porto-img/4c.png",
    desc: "Website pemesanan paket travel dengan integrasi payment gateway dari MIDTRANS serta dashboarad admin.",
    gitLink: "#",
    demoLink: "https://travel.juna.my.id",
    icon: [
      //   <SiLaravel key={1} color="#F05340" />,
      //   <SiMysql key={2} color="#00758f" />,
      //   <SiJquery key={3} color="black" />,
    ],
  },
  {
    id: 4,
    title: "Todo With Chat Website",
    image: "/img/projects/todo-chat.png",
    desc: "Website Todo List dengan fitur chat realtime menggunakan pusherJS",
    demoLink: "https://todo.juna.my.id",
  },
];

let wrapper = document.getElementById("portofolio-wrapper");

for (let i = 0; i < porto.length; i++) {
  const portoCard = `
    <div class="porto-card">
          <img src="${porto[i].image}" alt="" />
          <div class="porto-desc">
            <div class="title-link">
              <a href="${porto[i].demoLink}" target="_blank"
                ><i class="fa-solid fa-link fa-xl" style="color: #ffffff"></i
              ></a>
              <h3>${porto[i].title}</h3>
            </div>
            <p>
              ${porto[i].desc}
            </p>
            <div class="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
            </div>
          </div>
        </div>`;
  wrapper.innerHTML += portoCard;
}
