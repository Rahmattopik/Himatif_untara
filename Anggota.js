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
              img: "Devisi/ketua/vectorpria.jpg",
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
            { nama: "Udin", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Ketua PSDM", devisi: "psdm" },
            { nama: "Budi", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Wakil PSDM", devisi: "psdm" },
             { nama: "Bui", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Wakil PSDM", devisi: "psdm" }
          ]
        },
        kominfo: {
          isi: [
            {
              nama: "kominfo",
              img: "Devisi/ketua/vectorpria.jpg",
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
            { nama: "Ani", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Ketua Kominfo", devisi: "kominfo" },
            { nama: "Tono", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Wakil Kominfo", devisi: "kominfo" }
          ]
        },
        litbang: {
          isi: [
            {
              nama: "litbang",
              img: "Devisi/ketua/vectorpria.jpg",
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
            { nama: "Sari", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Ketua Litbang", devisi: "litbang" },
            { nama: "Dedi", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Wakil Litbang", devisi: "litbang" }
          ]
        },
        keorganisasian: {
          isi: [
            {
              nama: "keorganisasian",
              img: "Devisi/ketua/vectorpria.jpg",
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
            { nama: "Sari", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Ketua Litbang", devisi: "litbang" },
            { nama: "Dedi", img: "Devisi/ketua/vectorpria.jpg", sebagai: "Wakil Litbang", devisi: "litbang" }
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
