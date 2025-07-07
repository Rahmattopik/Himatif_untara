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
          nama:"Arsalan   Padhur    Rohman",
          img:"Devisi/KSB/Individu/Arsalan Padhur Rohman.jpg",
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
          nama:"ryandika diva fahlevi",
        img:"Devisi/KSB/Individu/ryandika diva fahlevi.jpg", 
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
  
    { nama:"BUNGA REVA",
    bagian:"bendahara1",
    img:"Devisi/KSB/Individu/BUNGA REVA.jpg"
      
    },
    { nama:"ai",
    bagian:"bendahara2",
    img:"Devisi/KSB/Individu/Arsalan Padhur Rohman.jpg"
      
    },
        { nama:"ai",
    bagian:"sekertaris1",
    img:"Devisi/KSB/Individu/Arsalan Padhur Rohman.jpg"
      
    },
            { nama:"ai",
    bagian:"sekertaris2",
    img:"Devisi/KSB/Individu/Arsalan Padhur Rohman.jpg"
      
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
        nama:"departemen psdm",
        img:"Devisi/DEP.PSDM/Background/Background.jpg",
      },
     {
        nama:"departemen kominfo",
        img:"Devisi/DEP.KOMINFO/Background/Background.jpg",
      },
     {
        nama:"departemen keorganisasian",
        img:"Devisi/DEP.KEORGANISASIAN/Background/Background.jpg",
      },
     {
        nama:"departemen penelitian dan pengembangan",
        img:"Devisi/DEP.LITBANG/Background/Background.jpg",
      }
      ],
      dpo:[
        {
        nama:"dpo himatif",
       img:"Devisi/DEP.LITBANG/Background/IMG_0039.jpg"
        }
        
        ]
    };
  }
}).mount("#app");
