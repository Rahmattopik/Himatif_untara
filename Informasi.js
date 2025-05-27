const { createApp } = Vue;

createApp({
  data() {
    return {
      info: [
        { img: "logo/LogoHimatif.png", nama: "logo himatif" },
        { img: "logo/untara.png", nama: "untara" },
      ],


    };
  }
}).mount("#app");