const { createApp } = Vue;

createApp({
  data() {
    return {
      dekan: [
        {
          nama: "udin",
          img: "Devisi/ketua/vectorpria.jpg",
          keterangan: "dekan fakultas teknik"
        }
      ],
      kaprodi: [
        {
          nama: "susi",
        img: "Devisi/ketua/vectorpria.jpg",
          keterangan: "kaprodi teknologi informasi"
        }
      ],
      akademik: [
        {
          nama: "jojo",
         img: "Devisi/ketua/vectorpria.jpg",
          keterangan: "akademik f.teknik"
        },
        {
          nama: "jiji",
 img: "Devisi/ketua/vectorpria.jpg",
          keterangan: "akademik f.teknik"
        }
      ],
      dosen: [
        {
          nama: "usop",
        img: "Devisi/ketua/vectorpria.jpg",
          keterangan: ""
        },
        {
          nama: "lufi",
          img: "Devisi/ketua/vectorpria.jpg",
          keterangan: ""
        },
        {
          nama: "zoro",
         img: "Devisi/ketua/vectorpria.jpg",
          keterangan: ""
        }
      ]
    };
  }
}).mount("#civitas");
