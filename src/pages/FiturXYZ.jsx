import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function FiturXYZ() {
  const [showForm, setShowForm] = useState(false);

  // 30 Data Isu Viral & Populer di Indonesia Saat Ini (Tahun 2026)
  const [dataViral] = useState([
    { id: "VRL-01", topik: "Satgas Darurat Judi Online", deskripsi: "Operasi besar-besaran pemblokiran rekening bank dan pembatasan akses VPN asing.", platform: "X & TikTok", volume: "Sangat Tinggi", status: "Kritis" },
    { id: "VRL-02", topik: "Serangan Ransomware PDN", deskripsi: "Evaluasi masif sistem siber nasional menyusul kebocoran data di berbagai lembaga publik.", platform: "X / Berita", volume: "Sangat Tinggi", status: "Kritis" },
    { id: "VRL-03", topik: "Aksi Demo Tarif UKT Kuliah", deskripsi: "Gelombang protes mahasiswa di berbagai kota menuntut transparansi biaya kuliah tunggal.", platform: "TikTok & IG", volume: "Tinggi", status: "Penting" },
    { id: "VRL-04", topik: "Dilema Kelas Menengah", deskripsi: "Fenomena penurunan daya beli kelompok menengah akibat inflasi dan penyesuaian tarif pajak.", platform: "X & Threads", volume: "Tinggi", status: "Penting" },
    { id: "VRL-05", topik: "Fenomena 'Doom Spending'", deskripsi: "Tren anak muda yang menghabiskan uang untuk kepuasan instan karena merasa sulit membeli rumah.", platform: "TikTok", volume: "Tinggi", status: "Pantau" },
    { id: "VRL-06", topik: "Boikot Masal Produk Afiliasi", deskripsi: "Gerakan konsumen di media sosial yang semakin selektif menyaring produk yang dianggap tidak etis.", platform: "X & IG", volume: "Tinggi", status: "Penting" },
    { id: "VRL-07", topik: "Konser Musisi Dunia di Jakarta", deskripsi: "War tiket konser internasional memicu perdebatan mengenai fenomena FOMO dan calo tiket digital.", platform: "X / IG", volume: "Sangat Tinggi", status: "Pantau" },
    { id: "VRL-08", topik: "Infrastruktur 5G Smart City IKN", deskripsi: "Uji coba transportasi otonom dan jaringan internet super cepat di Ibu Kota Nusantara.", platform: "YouTube / News", volume: "Sedang", status: "Normal" },
    { id: "VRL-09", topik: "Syarat Kerja Batas Usia 25 Tahun", deskripsi: "Kritik tajam netizen terhadap diskriminasi loker yang membatasi usia pelamar kerja lokal.", platform: "X & LinkedIn", volume: "Tinggi", status: "Penting" },
    { id: "VRL-10", topik: "Tren AI Influencer Lokal", deskripsi: "Munculnya selebgram virtual berbasis kecerdasan buatan yang mendapatkan banyak kontrak brand.", platform: "Instagram", volume: "Sedang", status: "Pantau" },
    { id: "VRL-11", topik: "Aturan Baru Subsidi BBM", deskripsi: "Penerapan sistem QR Code ketat untuk pembelian Pertalite dan Solar agar tepat sasaran.", platform: "Facebook & News", volume: "Tinggi", status: "Penting" },
    { id: "VRL-12", topik: "Maraknya Penipuan 'Deepfake'", deskripsi: "Kasus manipulasi wajah dan suara tokoh publik menggunakan AI untuk modus penipuan transfer uang.", platform: "WhatsApp & IG", volume: "Tinggi", status: "Kritis" },
    { id: "VRL-13", topik: "Polemik Pajak Hiburan & Kreatif", deskripsi: "Protes para pelaku usaha karaoke, konser, dan festival seni terkait kenaikan tarif pajak.", platform: "X / Berita", volume: "Sedang", status: "Penting" },
    { id: "VRL-14", topik: "Krisis Sampah Plastik Kota", deskripsi: "Darurat TPA penuh di beberapa wilayah memicu kampanye pilah sampah mandiri dari rumah.", platform: "Instagram", volume: "Sedang", status: "Pantau" },
    { id: "VRL-15", topik: "Runtuhnya 'StartUp Bubble'", deskripsi: "Gelombang PHK lanjutan di sektor teknologi lokal demi mengejar profitabilitas perusahaan.", platform: "LinkedIn & X", volume: "Tinggi", status: "Penting" },
    { id: "VRL-16", topik: "Anak Muda Pilih 'Childfree'", deskripsi: "Perdebatan sengit netizen lintas generasi mengenai keputusan untuk tidak memiliki anak.", platform: "X & TikTok", volume: "Sangat Tinggi", status: "Pantau" },
    { id: "VRL-17", topik: "Suhu Ekstrem & Heatwave", deskripsi: "Keluhan masif warga perkotaan mengenai cuaca panas terik yang menembus rekor baru.", platform: "TikTok & X", volume: "Tinggi", status: "Penting" },
    { id: "VRL-18", topik: "Kenaikan Harga Beras & Sembako", deskripsi: "Keluhan ibu rumah tangga mengenai fluktuasi harga kebutuhan pokok di pasar tradisional.", platform: "FB & Berita", volume: "Sangat Tinggi", status: "Kritis" },
    { id: "VRL-19", topik: "Demam 'Live Shopping' 24 Jam", deskripsi: "Persaingan ketat kreator konten yang melakukan siaran langsung tanpa henti demi komisi penjualan.", platform: "TikTok & Shopee", volume: "Tinggi", status: "Normal" },
    { id: "VRL-20", topik: "Kesehatan Mental Gen Z", deskripsi: "Meningkatnya kesadaran sekaligus fenomena self-diagnosis kesehatan mental di internet.", platform: "TikTok & IG", volume: "Tinggi", status: "Pantau" },
    { id: "VRL-21", topik: "Tren Hustle Culture vs Quiet Quitting", deskripsi: "Pergeseran pola pikir pekerja kantoran antara kerja keras ekstrem atau kerja secukupnya.", platform: "LinkedIn", volume: "Sedang", status: "Pantau" },
    { id: "VRL-22", topik: "Isolasi Sosial & 'Hikikomori' Lokal", deskripsi: "Meningkatnya jumlah anak muda yang memilih mengurung diri dan bekerja full-remote dari kamar.", platform: "X / Threads", volume: "Sedang", status: "Pantau" },
    { id: "VRL-23", topik: "Skandal Plagiarisme Karya Seni", deskripsi: "Kasus desainer lokal yang ketahuan menjiplak aset digital seniman luar tanpa izin.", platform: "X (Twitter)", volume: "Tinggi", status: "Pantau" },
    { id: "VRL-24", topik: "Fenomena Jasa Sewa Pacar", deskripsi: "Pro kontra maraknya bisnis penyewaan teman kencan untuk menghadiri acara formal.", platform: "TikTok & IG", volume: "Sedang", status: "Pantau" },
    { id: "VRL-25", topik: "Penyebaran Berita Hoax Pilkada", deskripsi: "Peningkatan konten manipulatif di grup keluarga menjelang pemilihan kepala daerah serentak.", platform: "WhatsApp & FB", volume: "Tinggi", status: "Kritis" },
    { id: "VRL-26", topik: "Fenomena Thrifting Pakaian Impor", deskripsi: "Razia pakaian bekas impor ilegal vs pembelaan masyarakat penikmat fashion murah.", platform: "TikTok & IG", volume: "Sedang", status: "Penting" },
    { id: "VRL-27", topik: "Ledakan Tren Olahraga Lari", deskripsi: "Menjamurnya komunitas 'Running Club' di kota besar dan fenomena outfit lari jutaan rupiah.", platform: "Instagram", volume: "Tinggi", status: "Normal" },
    { id: "VRL-28", topik: "Urgensi Regulasi Kendaraan Listrik", deskripsi: "Perdebatan aturan limbah baterai seiring masifnya populasi motor dan mobil listrik.", platform: "YouTube / News", volume: "Sedang", status: "Normal" },
    { id: "VRL-29", topik: "Krisis Air Bersih Perkotaan", deskripsi: "Penurunan permukaan tanah akibat eksploitasi air tanah berlebih di wilayah pesisir.", platform: "Berita / X", volume: "Sedang", status: "Penting" },
    { id: "VRL-30", topik: "Bahaya Kecanduan 'Gadget' Anak", deskripsi: "Laporan klinis mengenai peningkatan gangguan fokus pada anak akibat paparan konten durasi pendek.", platform: "FB & Berita", volume: "Tinggi", status: "Penting" },
  ]);

  return (
    <div className="p-6 font-barlow animate-in fade-in duration-500">
      
      {/* HEADER */}
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]}>
        <button
          onClick={() => setShowForm(true)}
          className="bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-200 flex items-center gap-2"
        >
          <span className="text-xl">+</span> Add New Issue
        </button>
      </PageHeader>

      {/* TABLE */}
      <div className="bg-white rounded-[2rem] shadow-soft overflow-hidden mt-8 border border-gray-100">
        <div className="overflow-x-auto max-h-[700px] overflow-y-auto">
          <table className="w-full text-left border-collapse">
            
            <thead className="bg-gray-50/50 border-b border-gray-100 sticky top-0 z-10 backdrop-blur-sm">
              <tr>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">ID</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Topik Viral</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Fokus Masalah</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest">Sumber & Volume</th>
                <th className="p-5 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Tingkat Urgensi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {dataViral.map((isu) => (
                <tr
                  key={isu.id}
                  className="hover:bg-emerald-50/30 transition-colors group cursor-default"
                >
                  {/* ID */}
                  <td className="p-5 text-sm font-bold text-gray-400">
                    {isu.id}
                  </td>

                  {/* TOPIK VIRAL */}
                  <td className="p-5">
                    <span className="text-gray-800 font-poppins font-bold hover:text-emerald-500 transition-colors block whitespace-nowrap">
                      {isu.topik}
                    </span>
                  </td>

                  {/* FOKUS MASALAH */}
                  <td className="p-5 text-sm font-medium text-gray-600 min-w-[300px] max-w-md">
                    {isu.deskripsi}
                  </td>

                  {/* SUMBER & VOLUME */}
                  <td className="p-5">
                    <div className="text-sm font-medium text-gray-600">{isu.platform}</div>
                    <div className="text-xs text-gray-400 tracking-wider font-bold uppercase">{isu.volume} Vol</div>
                  </td>

                  {/* TINGKAT URGENSI BADGE */}
                  <td className="p-5 text-center">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                        isu.status === "Kritis"
                          ? "bg-red-100 text-red-700"
                          : isu.status === "Penting"
                          ? "bg-orange-100 text-orange-700"
                          : isu.status === "Pantau"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {isu.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* MODAL ADD NEW ISSUE */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setShowForm(false)} 
          />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-500 p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-poppins font-bold">New Issue</h2>
                <p className="text-emerald-100 text-sm opacity-80">Tambahkan isu nasional baru ke radar pantauan.</p>
              </div>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4 font-barlow">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Topik Viral</label>
                  <input type="text" placeholder="Contoh: Regulasi AI Lokal" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Fokus Masalah</label>
                  <textarea placeholder="Deskripsikan inti masalah..." rows="2" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Sumber Ramai</label>
                  <input type="text" placeholder="Contoh: X, TikTok, Instagram" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Tingkat Urgensi</label>
                  <select className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none font-bold text-gray-600 appearance-none">
                    <option>Normal</option>
                    <option>Pantau</option>
                    <option>Penting</option>
                    <option>Kritis</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition active:scale-95"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-100 active:scale-95"
                >
                  Save Issue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}