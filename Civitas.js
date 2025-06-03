const { createApp } = Vue;

createApp({
  data() {
    return {
      dekan: [
        {
          nama: "Muhammad nur ikhsan, S.T.,M.Eng",
          img: "civitas/pak_ikhsan.jpg",
          keterangan: "dekan fakultas teknik"
        }
      ],
      kaprodi: [
        {
          nama: "Saryani, S.Kom.,M.TI",
        img: "civitas/1.Saryani.,S.Kom.,MTI.png",
          keterangan: "kaprodi teknologi informasi"
        }
      ],
      akademik: [
        {
          nama: "lutfiah ramadansyah.s.t",
         img: "civitas/mba_fifi.jpg",
          keterangan: "akademik f.teknik"
        },
        {
          nama: "widya selvi tiara, s.hum",
 img: "civitas/mba_widia.jpeg",
          keterangan: "akademik f.teknik"
        }
      ],
      dosen: [
        {
          nama: "r.wahyudi, s.t.,M.kom",
        img: "civitas/2.R Wahyudi.,ST.,M.Kom.png",
          
        },
        {
          nama: "Bambang libtiantori,S.kom.,M.kom",
        img: "civitas/bambang.jpeg",
          
        },
                {
          nama: "Septa Febriyansyah.,S.M.,S.Kom.,M.Kom",
        img: "civitas/5. Septa Febriyansyah.,S.M.,S.Kom.,M.Kom.png",
          
        },
                {
          nama: "Fabio Junior.,S.Kom.,M.Kom",
        img: "civitas/6. Fabio Junior.,S.Kom.,M.Kom.png",
          
        },
                {
          nama: "Irawan.,S.Kom.,M.Kom",
        img: "civitas/8. Irawan.,S.Kom.,M.Kom.png",
          
        },
                {
          nama: "Rika Nurhidayah.,S.Kom.,MM",
        img: "civitas/3.Rika Nurhidayah.,S.Kom.,MM.png",
          
        },



      ]
    };
  }
}).mount("#civitas");
