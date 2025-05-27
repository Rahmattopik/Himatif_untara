const { createApp } = Vue;

createApp({
  data() {
    return {
      logo: [
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" },
        { img: "Logo/untara.png", nama: "untara" },
      ],
      himatif: [
        { p: "adalah wadah pengembangan" },
        { p: "hai semua akskd fdjdnjddndjsjdjd djdjdjdj ddjdjjdjedndjdnd " },
        { p: "baik djdjddjdjdjdjdd dndjjddjjdd dndjdjd" }
      ],
      ketua:[
        {
          nama:"ketua",
          img:"Devisi/ketua/vectorpria.jpg",
          ig:"",
          visi:"jsj sjsjs",
          misi: [
  "1. djdj djdjdj",
  "2. hdjdjjd",
  "3. jdjdjj"
],
         
          tujuan:[
            "1. rhbdbd",
            "2. hdbdnd dbdbd"
            ]
        },
        {
          nama:"wakil ketua",
        img:"Devisi/ketua/vectorpria.jpg", 
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
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" },
        { img: "Logo/untara.png", nama: "untara" },
        { img: "Logo/untara.png", nama: "untara" },
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" },
        { img: "Logo/LogoHimatif.png", nama: "logo himatif" },
      ],
    
    devisi:[
      {
        nama:"departemen psdm",
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
