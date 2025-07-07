const { createApp } = Vue;

createApp({
  data() {
    return {
      karya: [
        {
          img: "img/rahmat.jpg",
          judul: "web rahmat",
          link: "https://rahmattopik.github.io/Himatif_untara/"
        },

        // Tambahkan item lainnya jika perlu
      ]
    };
  }
}).mount("#karya");