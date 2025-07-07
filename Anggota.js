const { createApp } = Vue;

createApp({
  data() {
    return {
      divisiAktif: 'psdm', // default
      dataDivisi: {
        psdm: {
          isi: [
            {
              nama: "psdm",
              img: "Devisi/DEP.PSDM/Background/Background.jpg", sebagai: "Ketua",
              tugas: [
                "1. Mengembangkan sumber daya mahasiswa",
                "2. Mengadakan pelatihan",
                "3. Memfasilitasi pengembangan diri"
              ],
              program: [
                { isi: "Sosialisasi", text: "Pengenalan organisasi" },
                { isi: "Pelatihan", text: "Pelatihan kepemimpinan" }
              ]
            }
          ],
          anggota: [
            { nama: "ahmad ariel rafai", img: "Devisi/DEP.PSDM/Individu/Gilang Pratama.jpg", sebagai: "Ketua PSDM", devisi: "psdm" },
            { nama: "eni irma sihombing", img: "Devisi/DEP.PSDM/Individu/Gilang Pratama.jpg", sebagai: "sekret PSDM", devisi: "psdm" },
             { nama: "asep hermawan", img: "Devisi/DEP.PSDM/Individu/Gilang Pratama.jpg", sebagai: "ketua suv PSDM", devisi: "psdm" },
           { nama: "Alpin Antoni", img: "Devisi/DEP.PSDM/Individu/Alpin Antoni.jpg", sebagai: "anggita PSDM", devisi: "psdm" },
           { nama: "Bimo Ghafur Prabowo", img: "Devisi/DEP.PSDM/Individu/Bimo Ghafur Prabowo.jpg", sebagai: "anggita PSDM", devisi: "psdm" },
             { nama: "Dinar Hafidzah Maesyarah", img: "Devisi/DEP.PSDM/Individu/Dinar Hafidzah Maesyarah.jpg", sebagai: "anggita PSDM", devisi: "psdm" },
            { nama: "Gilang Pratama", img: "Devisi/DEP.PSDM/Individu/Gilang Pratama.jpg", sebagai: "anggita PSDM", devisi: "psdm" },
            { nama: "Mohammad Rizky", img: "Devisi/DEP.PSDM/Individu/Mohammad Rizky.jpg", sebagai: "anggita PSDM", devisi: "psdm" },
             { nama: "Nadia Eka Rahmawati", img: "Devisi/DEP.PSDM/Individu/Nadia Eka Rahmawati.png", sebagai: "anggita PSDM", devisi: "psdm" },
             
          ]
        },
        kominfo: {
          isi: [
            {
              nama: "kominfo",
              img: "Devisi/DEP. KOMINFO/Background/Background.jpg",
              tugas: [
                "1. Mengelola informasi",
                "2. Menyebarluaskan publikasi",
                "3. Mengelola media sosial"
              ],
              program: [
                { isi: "Web Development", text: "Pembuatan website HIMATIF" },
                { isi: "Desain Grafis", text: "Konten IG dan poster acara" }
              ]
            }
          ],
          anggota: [
            { nama: "estiriana", img: "Devisi/DEP.KOMINFO/Individu/Rahma Sefti Hasanah.jpg", sebagai: "Ketua Kominfo", devisi: "kominfo" },
            { nama: "Rahma Sefti Hasanah", img: "Devisi/DEP.KOMINFO/Individu/Rahma Sefti Hasanah.jpg", sebagai: "sekret Kominfo", devisi: "kominfo" },
          { nama: "ANINDITA BUNKAL", img: "Devisi/DEP.KOMINFO/Individu/ANINDITA BUNKAL.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
          { nama: "AURA SALSABILLA PUTRI", img: "Devisi/DEP.KOMINFO/Individu/AURA SALSABILLA PUTRI.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
           { nama: "Dimas Bayu Wibiastanto", img: "Devisi/DEP.KOMINFO/Individu/Dimas Bayu Wibiastanto.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
            { nama: "Fadilah Nauval Almayda", img: "Devisi/DEP.KOMINFO/Individu/Fadilah Nauval Almayda.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
             { nama: "Faiq", img: "Devisi/DEP.KOMINFO/Individu/Faiq.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
             { nama: "Iqra Tri Karunia", img: "Devisi/DEP.KOMINFO/Individu/Iqra Tri Karunia.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
             { nama: "M.DIMAS BAYU PRATAMA_", img: "Devisi/DEP.KOMINFO/Individu/M.DIMAS BAYU PRATAMA_.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
            { nama: "Nadia Nur Aulia", img: "Devisi/DEP.KOMINFO/Individu/Nadia Nur Aulia.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
             { nama: "Nilatus sururiyyah", img: "Devisi/DEP.KOMINFO/Individu/Nilatus sururiyyah.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
             { nama: "Yudha Gani Azis", img: "Devisi/DEP.KOMINFO/Individu/Yudha Gani Azis.jpg", sebagai: "anggota Kominfo", devisi: "kominfo" },
          ]
        },
        litbang: {
          isi: [
            {
              nama: "litbang",
              img: "Devisi/DEP.LITBANG/Background/Background.jpg",
              tugas: [
                "1. Penelitian internal",
                "2. Evaluasi kegiatan",
                "3. Dokumentasi inovasi"
              ],
              program: [
                { isi: "Riset", text: "Survey kebutuhan mahasiswa" },
                { isi: "Laporan", text: "Evaluasi program HIMATIF" }
              ]
            }
          ],
          anggota: [
            { nama: "Muhamad Rachel Alvizahri", img: "Devisi/DEP.LITBANG/Individu/Muhamad Rachel Alvizahri.jpg", sebagai: "Ketua Litbang", devisi: "litbang" },
         { nama: "Enjeliana Situmorang.jpg", img: "Devisi/DEP.LITBANG/Individu/Enjeliana Situmorang.jpg", sebagai: "sekret Litbang", devisi: "litbang" },
         { nama: "GHIFARI DIAZ FAHREZI", img: "Devisi/DEP.LITBANG/Individu/GHIFARI DIAZ FAHREZI.jpg", sebagai: "Ketua sub Litbang", devisi: "litbang" },
             { nama: "ARCHILLEUS ALDO KURNIYANTO", img: "Devisi/DEP.LITBANG/Individu/ARCHILLEUS ALDO KURNIYANTO-1.jpg", sebagai: "angota Litbang", devisi: "litbang" },
           { nama: "Fendi", img: "Devisi/DEP.LITBANG/Individu/Fendi.jpg", sebagai: "angota Litbang", devisi: "litbang" },
          { nama: "Rahmat topik", img: "Devisi/DEP.LITBANG/Individu/Rahmat_topik.jpg", sebagai: "angota Litbang", devisi: "litbang" },
          { nama: "Haris Munandar", img: "Devisi/DEP.LITBANG/Individu/Haris Munandar.jpg", sebagai: "angota Litbang", devisi: "litbang" },
             { nama: "IMG_9996(1)", img: "Devisi/DEP.LITBANG/Individu/IMG_9996(1).jpg", sebagai: "angota Litbang", devisi: "litbang" },
             
            { nama: "irgi apriana abas.jpg", img: "Devisi/DEP.LITBANG/Individu/irgi apriana abas.jpg", sebagai: "angota Litbang", devisi: "litbang" },
            { nama: "Muhamad pahrul Rohmatulloh", img: "Devisi/DEP.LITBANG/Individu/Muhamad pahrul Rohmatulloh.jpg", sebagai: "angota Litbang", devisi: "litbang" },
         
         

          ]
        },
        keorganisasian: {
          isi: [
            {
              nama: "keorganisasian",
              img: "Devisi/DEP.KEORGANISASIAN/Background/Background.jpg",
              tugas: [
                "1. Penelitian internal",
                "2. Evaluasi kegiatan",
                "3. Dokumentasi inovasi"
              ],
              program: [
                { isi: "Riset", text: "Survey kebutuhan mahasiswa" },
                { isi: "Laporan", text: "Evaluasi program HIMATIF" }
              ]
            }
          ],
          anggota: [
            { nama: "rafly nathan tata hidayat", img: "Devisi/DEP.KEORGANISASIAN/Individu/Cucumu Indah Amumpuni Pitalenti Widodo.jpg", sebagai: "ketua", devisi: "KEORGANISASIAN" },
            { nama: "Tiara Fitriani", img: "Devisi/DEP.KEORGANISASIAN/Individu/Tiara Fitriani.jpg", sebagai: "sekret", devisi: "KEORGANISASIAN" },
              { nama: "GunturRioSaputra", img: "Devisi/DEP.KEORGANISASIAN/Individu/GunturRioSaputra.jpg", sebagai: "ketua sub", devisi: "KEORGANISASIAN" },
             { nama: "Eka Rahma Prasetyo", img: "Devisi/DEP.KEORGANISASIAN/Individu/Eka Rahma Prasetyo_.jpg", sebagai: "ketua sub", devisi: "KEORGANISASIAN" },
     { nama: "Cucumu Indah Amumpuni Pitalenti Widodo", img: "Devisi/DEP.KEORGANISASIAN/Individu/Cucumu Indah Amumpuni Pitalenti Widodo.jpg", sebagai: "anggota", devisi: "KEORGANISASIAN" },
         { nama: "IMG-20250621-WA0015.jpg", img: "Devisi/DEP.KEORGANISASIAN/Individu/IMG-20250621-WA0015.jpg", sebagai: "anggota", devisi: "KEORGANISASIAN" },
           { nama: "Islah Abdul Ghoffar", img: "Devisi/DEP.KEORGANISASIAN/Individu/Islah Abdul Ghoffar_.jpg", sebagai: "anggota", devisi: "KEORGANISASIAN" },
              { nama: "MUHAMMAD FAIZ FIRMANSYAH", img: "Devisi/DEP.KEORGANISASIAN/Individu/MUHAMMAD FAIZ FIRMANSYAH.jpg", sebagai: "anggota", devisi: "KEORGANISASIAN" },
          ]
        }
        
      }
    };
  },
  computed: {
    divisi() {
      return this.dataDivisi[this.divisiAktif];
    }
  },
  methods: {
    gantiDivisi(nama) {
      this.divisiAktif = nama;
    }
  }
}).mount("#anggota");
