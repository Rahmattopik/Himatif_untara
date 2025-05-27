const { createApp } = Vue;

createApp({
  data() {
    return {
      dekan: [
        {
          nama: "udin",
          img: "devisi/ketua/vectorpria.jpg",
          keterangan: "dekan fakultas teknik"
        }
      ],
      kaprodi: [
        {
          nama: "susi",
         img: "devisi/ketua/vectorpria.jpg",
          keterangan: "kaprodi teknologi informasi"
        }
      ],
      akademik: [
        {
          nama: "jojo",
          img: "devisi/ketua/vectorpria.jpg",
          keterangan: "akademik f.teknik"
        },
        {
          nama: "jiji",
img: "devisi/ketua/vectorpria.jpg",
          keterangan: "akademik f.teknik"
        }
      ],
      dosen: [
        {
          nama: "usop",
          img: "devisi/ketua/vectorpria.jpg",
          keterangan: ""
        },
        {
          nama: "lufi",
          img: "devisi/ketua/vectorpria.jpg",
          keterangan: ""
        },
        {
          nama: "zoro",
          img: "devisi/ketua/vectorpria.jpg",
          keterangan: ""
        }
      ]
    };
  }
}).mount("#civitas");