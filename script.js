const porto = [
  {
    id: 1,
    title: "Food Corner",
    image: "./img/projects/e-canteen.png",
    desc: "Website E-Canteen yang dikembangkan menggunakan MERN stack (MongoDB, Express.js, React, dan Node.js). Website ini memungkinkan pengguna untuk melakukan pemesanan makanan atau minuman secara online dengan mudah dan efisien.",
    gitLink: "https://github.com/AlgonzaDJun/Food-Corner",
    demoLink: "https://blue-bewildered-swallow.cyclic.app",
    icon: [
      `<i class="fa-brands fa-react fa-xl"></i>`,
      `<i class="fa-brands fa-bootstrap fa-xl"></i>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/express-js.png" alt="express-js"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/nodejs.png" alt="nodejs"/>`,
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
      `<i class="fa-brands fa-react fa-xl"></i>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/redux.png" alt="redux"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/material-ui.png" alt="material-ui"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/google-firebase-console.png" alt="google-firebase-console"/>`,
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
      `<i class="fa-brands fa-laravel fa-2xl" style="color: #ff0000;"></i>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/sass.png" alt="sass"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>`,
      `<img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Midtrans.png" alt="mongodb"/>`,
    ],
  },
  {
    id: 4,
    title: "Todo Website With Realtime Chat Feature",
    image: "/img/projects/todo-chat.png",
    desc: "Website Todo List dengan fitur chat realtime menggunakan pusherJS",
    demoLink: "https://todo.juna.my.id",
    icon: [
      `<i class="fa-brands fa-laravel fa-2xl" style="color: #ff0000;"></i>`,
      `<img width="48" height="48" src="https://avatars.githubusercontent.com/u/739550?s=200&v=4" alt="mongodb"/>`,
      `<img width="48" height="48" src="https://img.icons8.com/color/48/tailwind_css.png" alt="tailwind_css"/>`,
    ],
  },
];

let wrapper = document.getElementById("portofolio-wrapper");

for (let i = 0; i < porto.length; i++) {
  console.log(porto[i].icon);

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
              ${porto[i]?.icon.join(" ")}
            </div>
          </div>
        </div>`;

  wrapper.innerHTML += portoCard;
}
// ${(porto[i]?.icon).map((icon) => icon).join(" ")}
