const { createApp } = Vue;

createApp({
  data() {
    return {
      karya: [
        {
          img: "img/contoh.png",
          judul: "web rahmat",
          link: "https://rahmattopik.github.io/Himatif_untara/"
        },
            {
          img: "img/background/awan.png",
          judul: "web awan",
          link: "https://rahmattopik.github.io/Himatif_untara/"
        },
        // Tambahkan item lainnya jika perlu
      ]
    };
  }
}).mount("#karya");
