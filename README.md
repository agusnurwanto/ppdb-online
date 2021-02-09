# PPDB Online WordPress

### Donasi
- Donasi untuk pengembang aplikasi, klik di link ini https://smkasiyahhomeschooling.blogspot.com/p/donasi-pengembangan-smk-asiyah.html

**Catatan**:
- Contoh web yang sudah menggunakan plugin ini:
    * https://ppdb.smkangkasa-iswahjudi.sch.id/
- Harus install plugin ultimate member di https://wordpress.org/plugins/ultimate-member/
    * Membuat form registrasi pendaftaran terlebih dulu https://docs.ultimatemember.com/
- Untuk edit profile pendaftar bisa dilakukan oleh: 
    * User admin dengan masuk ke menu "dasboard wp-admin > users > view profile > edit profile"
    * User pendaftar sendiri langsung di menu "edit profile"
- Untuk tampilan data pendaftar https://ppdb.smkangkasa-iswahjudi.sch.id/data-pendaftar/ :
    * Jika diakses oleh user admin akan ditampilkan semua data pendaftar
    * Jika diakses oleh tanpa login atau user pendaftar, hanya akan ditampilkan data secukupnya. Default (No Pendaftar, Nama, Asal Sekolah, NISN)
    * Untuk edit tampilan tabel di halaman data pendaftar bisa langsung edit ***shortcode function daftar_siswa_shortcode*** di file "public > class-ppdb-online-public.php"
- Download data pendaftar bisa dilakukan dengan klik tombol EXCEL di halaman data pendaftar https://ppdb.smkangkasa-iswahjudi.sch.id/data-pendaftar/
- Saran jika form pendaftaran perlu menyertakan berkas file, sebaiknya diupload di google drive atau penyimpanan yang lain. Nantinya bisa dibuat share link dan linknya dapat diinputkan di form pendaftaran. Hal ini dilakukan untuk mempermudah pengembangan script dan juga agar tidak membebani server karena harus menyimpan file-file yang besar.
- Edit tampilan header bukti pendaftaran contoh https://ppdb.smkangkasa-iswahjudi.sch.id/bukti-pendaftaran/?user_id=97 bisa dilakukan di file ini "public > partials > bukti-pendaftaran.php"
- Untuk info lainnya bisa tanyakan langsung via **WA ke 0857-0829-7100 (Agus Nurwanto)**

**Halaman Utama** https://ppdb.smkangkasa-iswahjudi.sch.id/

<img src="https://github.com/agusnurwanto/ppdb-online/blob/master/home_ppdb.png?raw=true" alt="Halaman Utama" width="300">

**Halaman Registrasi** https://ppdb.smkangkasa-iswahjudi.sch.id/register/

<img src="https://github.com/agusnurwanto/ppdb-online/blob/master/Register.png?raw=true" alt="Halaman Registrasi" width="300">

**Halaman Bukti Pendaftaran** https://ppdb.smkangkasa-iswahjudi.sch.id/bukti-pendaftaran/?user_id=97

<img src="https://github.com/agusnurwanto/ppdb-online/blob/master/Bukti_Pendaftaran.png?raw=true" alt="Halaman Bukti Pendaftaran" width="300">

**Halaman Data Pendaftar** https://ppdb.smkangkasa-iswahjudi.sch.id/data-pendaftar/

<img src="https://github.com/agusnurwanto/ppdb-online/blob/master/Data_Pendaftar.png?raw=true" alt="Halaman Data Pendaftar" width="300">


## Semoga bisa bermanfaat dan memberi keberkahan. AMIN
