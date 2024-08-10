import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1>
        <title>Portofolio Wafi</title>
        <meta name="description" content="Portofolio Wafi"></meta>
      </h1>
      <main>
      <section className="hero bg-green-300 text-center p-10">
          <Image src="/profilephoto.jpg" alt="Profile Picture" width={300} height={150} className="rounded-full mx-auto" />
          <h1 className="text-4xl font-bold mt-4">Ahmad Wafi Idzharulhaqq</h1>
          <p className="mt-2 text-lg">Ahmad Wafi Idzharulhaqq lahir di Bandung, 07 Februari 2005. Ia merupakan anak pertama dari tiga bersaudara.
            Abi dan Umminya merupakan seorang dosen di universitas swasta. Saat ini, Ia sedang mendalami studi di Institut Teknologi Bandung
            sebagai mahasiswa jurusan Informatika. Dalam hidup, Wafi sangat menyukai tantangan tetapi masih sangat kurang dalam mengelola waktu dan mengontrol diri.
          </p>
        </section>

        <section className="minatbakat p-10">
          <h2 className="text-3xl font-bold mb-4">Minat</h2>
          <p className="text-lg">Sejak kecil Ia memiliki ketertarikan yang besar dengan pelajaran biologi dan
            berbagai perangkat elektronik di sekitarnya. Seringkali Ia menghabiskan waktu untuk mengotak atik perangkat yang ada di hadapannya.
            Sayangnya, hal ini tidak bertahan cukup lama. Ketika memasuki dunia SMP, Wafi hanya difokuskan pada pelajaran umum dan biologi saja.
            Saat ini, Ia sedang berusaha menumbuhkan minatnya kembali pada dunia teknologi khususnya di bidang informatika.</p>
        </section>
        
        <section className="Projek p-10">
          <h2 className="text-3xl font-bold mb-4">Projek</h2>
          <ul className="List-Projek">
            <li>Ketua Bidang Tarbiyah DKM SMAN 20 Bandung</li>
            <li>Staff HR The Sandbox by IEEE 2023</li>
            <li>Fasilitator JSC 54</li>
            <li>Moderator SSC 56</li>
            <li>Staff IT Impact 2024</li>
            <li>Part of Pengurus Gamais 2024/2025</li>
          </ul>
        </section>

        <section className="achievements p-10">
          <h2 className="text-3xl font-bold mb-4">Pencapaian</h2>
          <div>Gold Medal International Applied Biology Olympiad 2022</div>
        </section>

        <div className="social-links p-10 text-center flex justify-center gap-6">
          <a href="https://instagram.com/awafi.dz" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="mailto:awafi670@gmail.com" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </main>
    </div>
  );
};
      

export default Home;
