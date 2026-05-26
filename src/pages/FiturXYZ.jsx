import { useState } from "react";
// Sesuaikan path import komponen jika struktur folder Anda berbeda
import PageHeader from "../components/PageHeader";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge"; // Pastikan Badge di-import jika digunakan
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function FiturXYZ() {
  const [showForm, setShowForm] = useState(false);

  // 30 Data Isu Viral & Populer di Indonesia Saat Ini
  const [dataViral, setDataViral] = useState([
    { id: "VRL-01", topik: "Satgas Darurat Judi Online", deskripsi: "Operasi besar-besaran pemblokiran rekening bank dan pembatasan akses VPN asing.", platform: "X & TikTok", volume: "Sangat Tinggi", status: "Kritis" },
    { id: "VRL-02", topik: "Serangan Ransomware PDN", deskripsi: "Evaluasi masif sistem siber nasional menyusul kebocoran data di berbagai lembaga publik.", platform: "X / Berita", volume: "Sangat Tinggi", status: "Kritis" },
    { id: "VRL-03", topik: "Aksi Demo Tarif UKT Kuliah", deskripsi: "Gelombang protes mahasiswa di berbagai kota menuntut transparansi biaya kuliah tunggal.", platform: "TikTok & IG", volume: "Tinggi", status: "Penting" },
    { id: "VRL-04", topik: "Dilema Kelas Menengah", deskripsi: "Fenomena penurunan daya beli kelompok menengah akibat inflasi dan penyesuaian tarif pajak.", platform: "X & Threads", volume: "Tinggi", status: "Penting" },
    { id: "VRL-05", topik: "Fenomena 'Doom Spending'", deskripsi: "Tren anak muda yang menghabiskan uang untuk kepuasan instan karena merasa sulit membeli rumah.", platform: "TikTok", volume: "Tinggi", status: "Pantau" },
  ]);

  // Fungsi Export Data ke CSV (Excel)
  const handleExportLaporan = () => {
    const headers = ["ID", "Topik Viral", "Fokus Masalah", "Sumber", "Volume", "Urgensi"];
    const csvRows = [
      headers.join(","),
      ...dataViral.map(isu => 
        `"${isu.id}","${isu.topik.replace(/"/g, '""')}","${isu.deskripsi.replace(/"/g, '""')}","${isu.platform}","${isu.volume}","${isu.status}"`
      )
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Laporan_Radar_Isu_2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="dashboard-container" className="p-6 font-barlow space-y-8 animate-in fade-in duration-500">
      
      {/* ===== HEADER UTAMA ===== */}
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Order List"]}>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={handleExportLaporan}
            className="font-bold rounded-xl transition cursor-pointer text-gray-700 dark:text-gray-200"
          >
            ↓ Export Laporan
          </Button>

          <Button
            size="lg"
            onClick={() => setShowForm(true)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 border-transparent transition cursor-pointer"
          >
            + Add New Issue
          </Button>
        </div>
      </PageHeader>

      {/* ===== LAYOUT BARU: CARD UJI & PREVIEW ===== */}
      <div className="flex flex-wrap items-start gap-4 md:flex-row">
        {/* Card Belajar shadcn/ui Uji Komponen */}
        <Card className="mt-4 w-[380px] bg-white shadow-soft rounded-[2rem] border border-gray-100 overflow-hidden">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="font-poppins font-bold text-gray-800">Belajar shadcn/ui</CardTitle>
              <Badge variant="secondary" className="bg-slate-100 text-slate-800 rounded-full px-2 py-0.5 text-xs">Baru</Badge>
            </div>
            <CardDescription className="text-xs text-gray-400 mt-1">
              Contoh penggunaan komponen shadcn/ui di React
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-600">
              Komponen ini dibuat di branch <strong className="text-emerald-600">setup-shadcn</strong> lalu di-merge ke main.
            </p>
          </CardContent>

          <CardFooter className="flex gap-2">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition cursor-pointer">
              Simpan
            </Button>
            <Button variant="outline" className="font-bold rounded-xl transition cursor-pointer">
              Batal
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ===== TABEL DATA ===== */}
      <div className="bg-white rounded-[2rem] shadow-soft overflow-hidden border border-gray-100">
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
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
                <tr key={isu.id} className="hover:bg-emerald-50/30 transition-colors group cursor-default">
                  <td className="p-5 text-sm font-bold text-gray-400">{isu.id}</td>
                  <td className="p-5">
                    <span className="text-gray-800 font-poppins font-bold hover:text-emerald-500 transition-colors block whitespace-nowrap">
                      {isu.topik}
                    </span>
                  </td>
                  <td className="p-5 text-sm font-medium text-gray-600 min-w-[300px] max-w-md">{isu.deskripsi}</td>
                  <td className="p-5">
                    <div className="text-sm font-medium text-gray-600">{isu.platform}</div>
                    <div className="text-xs text-gray-400 tracking-wider font-bold uppercase">{isu.volume} Vol</div>
                  </td>
                  <td className="p-5 text-center">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm ${
                      isu.status === "Kritis" ? "bg-red-100 text-red-700" :
                      isu.status === "Penting" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {isu.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== MODAL INPUT FORM ===== */}
      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowForm(false)}
          />
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-emerald-500 p-6 text-white relative overflow-hidden">
              <h2 className="text-2xl font-poppins font-bold relative z-10">New Issue</h2>
              <p className="text-emerald-100 text-sm opacity-80 relative z-10">Tambahkan data pantauan baru.</p>
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <form className="p-8 space-y-4 font-barlow" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Topik Viral</label>
                <input type="text" placeholder="Contoh: Regulasi AI" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Fokus Masalah</label>
                <textarea placeholder="Deskripsi..." rows="2" className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none" />
              </div>

              {/* ACTION BUTTON CONTAINER */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShowForm(false)}
                  className="flex-1 h-11 font-bold rounded-2xl text-gray-500 hover:bg-gray-100 transition cursor-pointer border-transparent"
                >
                  Batal
                </Button>

                <Button
                  type="submit"
                  className="flex-1 h-11 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition shadow-lg shadow-emerald-100 cursor-pointer border-transparent"
                >
                  Save Issue
                </Button>
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  variant="destructive"
                  className="w-full h-11 font-bold rounded-2xl transition cursor-pointer border-transparent"
                  onClick={() => {
                    if (window.confirm("Kosongkan form dan batalkan?")) setShowForm(false);
                  }}
                >
                  Batal & Tutup Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}