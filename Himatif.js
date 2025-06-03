const { createApp } = Vue;

createApp({
  data() {
    return {
      
      logo: [
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" },
        { img: "Logo/untara.png", nama: "untara" },
      ],
      himatif: [
        { p: "adalah wadah pengembangan dan aspirasi Mahasiswa Teknik Informasi yang tumbuh atas kesadaran dan rasa tanggung jawab sosial dari, oleh, dan untuk mahasiswa, khususnya di Universitas Tangerang Raya" },
        { p: "adalah organisasi kemahasiswaan yang berdiri dibawah naungan Badan Eksekutif Mahasiswa Fakultas Teknik.  " },
        { p: "adalah organisasi kemahasiswaan tertinggi ditingkat Jurusan Teknik Informasi." }
      ],
      ketua:[
        {
          bagian:"(ketua)",
          nama:"Arsalan padhur rohman",
          img:"Img/contoh.png",
          ig:"",
          visi:"menjadikan himatif menjadi organisasi yg lebih unggul inovatif dan berintegrasi dalam mengembangkan potensi mahasiswa serta pengurus teknologi informasi Untara.",
          misi: [
 "1.mengambangkan potensi mahasiswa",
"2.meningkatkan kesadaran pendidikan serta teknologi",
"3.meningkatkan integritas dan profesionalisme",
],
         
          tujuan:[
            "1. ingin himatif jadi lebih baik",
            "2. sukseskan acara"
            ]
        },
        {
          bagian:"(wakil ketua)",
          nama:"Ryandika diva fahlevi",
        img:"Img/contoh.png", 
        ig:"link"
        }
        ],
        
  struktur:[
    { nama:"ai",
    bagian:"ketua",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
            { nama:"ai",
    bagian:"wakil ketua",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
  
    { nama:"ai",
    bagian:"bendahara1",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
    { nama:"ai",
    bagian:"bendahara2",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
        { nama:"ai",
    bagian:"sekertaris1",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
            { nama:"ai",
    bagian:"sekertaris2",
    img:"Devisi/ketua/vectorpria.jpg"
      
    },
    ],
  info: [
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" ,p:"di duga bahwa dia ..."},
        { img: "Logo/untara.png", nama: "untara" ,p:"memenangkan komoetisi antar ...." },
        { img: "Logo/untara.png", nama: "untara", p:"juara pertama" },
        { img: "Logo/LogoHimatif.png", nama: "logo himatif", p:"juara pertama"},
        { img: "Logo/LogoHimatif.png", nama: "logo himatif", p:"juara pertama" },
      ],
    
    devisi:[
      {
        nama:"departemen psdm ",
        img:"Devisi/ketua/vectorpria.jpg",
      },
     {
        nama:"departemen kominfo",
        img:"Devisi/ketua/vectorpria.jpg",
      },
     {
        nama:"departemen keorganisasian",
        img:"Devisi/ketua/vectorpria.jpg",
      },
     {
        nama:"departemen penelitian dan pengembangan",
        img:"Devisi/ketua/vectorpria.jpg",
      }
      ],
      dpo:[
        {
        nama:"dpo himatif",
       img:"Devisi/ketua/vectorpria.jpg"
        }
        
        ]
    };
  }
}).mount("#app");
