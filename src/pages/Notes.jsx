import { useState, useEffect } from "react";
import { notesAPI } from "../services/notesAPI";
import AlertBox from "@/components/AlertBox";
import { AiFillDelete } from "react-icons/ai"; 

// Import komponen UI utama Anda
import PageHeader from "../components/PageHeader";
import { Button } from "../components/ui/button";
import GenericTable from "../components/GenericTable"; 
import LoadingSpinner from "../components/LoadingSpinner"; 
import EmptyState from "../components/EmptyState"; 

export default function Notes() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);

  const [dataForm, setDataForm] = useState({
    title: "",
    content: "",
    status: "Active",
  });

  // Handle perubahan nilai input form
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Mengambil data catatan dari API
  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data || []);
    } catch (err) {
      setError("Gagal memuat catatan");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNotes();
  }, []);

  // Handle form submission untuk membuat notes baru
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.createNote(dataForm);

      setSuccess("Catatan berhasil ditambahkan!");

      // Kosongkan Form setelah Success
      setDataForm({ title: "", content: "", status: "Active" });

      // Hilangkan pesan Success setelah 2 detik
      setTimeout(() => setSuccess(""), 2000);

      // Refresh data table
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle untuk aksi hapus data
  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);

      setSuccess("Catatan berhasil dihapus!");

      // Hilangkan notifikasi sukses setelah 2 detik
      setTimeout(() => setSuccess(""), 2000);

      // Refresh data
      loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Fungsi Export Data Notes (CSV / Excel)
  const handleExportLaporan = () => {
    if (notes.length === 0) return alert("Tidak ada data untuk diexport");
    const headers = ["No", "Judul", "Isi Catatan"];
    const csvRows = [
      headers.join(","),
      ...notes.map((note, index) => 
        `"${index + 1}","${note.title.replace(/"/g, '""')}","${note.content.replace(/"/g, '""')}"`
      )
    ];
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Daftar_Catatan_Admin.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="notes-container" className="p-6 font-barlow space-y-8 animate-in fade-in duration-500">
      
      {/* ===== SCOPED CSS KONTROL HEADER TABEL ===== */}
      <style>{`
        #custom-notes-table thead,
        #custom-notes-table table thead tr {
          background-color: #10b981 !important;
        }
        #custom-notes-table thead th {
          color: #ffffff !important;
          font-weight: 700 !important;
          background-color: #10b981 !important;
        }
        #custom-notes-table tbody tr {
          background-color: #ffffff !important;
        }
      `}</style>

      {/* ===== ALERT TOAST BOX ===== */}
      <div className="fixed top-5 right-5 z-[70] space-y-2 max-w-sm">
        {error && <AlertBox type="error">{error}</AlertBox>}
        {success && <AlertBox type="success">{success}</AlertBox>}
      </div>

      {/* ===== HEADER UTAMA ===== */}
      <PageHeader title="Notes" breadcrumb={["Dashboard", "Notes List"]}>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={handleExportLaporan}
            className="font-bold rounded-xl transition cursor-pointer text-gray-700 dark:text-gray-200"
          >
            ↓ Export Laporan
          </Button>
        </div>
      </PageHeader>

      {/* ===== 2-KOLOM LAYOUT UTAMA ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
        
        {/* KOLOM KIRI: FORM PERMANEN (STALWART DI LUAR) */}
        <div className="lg:col-span-1 bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden sticky top-6">
          <div className="bg-emerald-500 p-6 text-white relative overflow-hidden">
            <h2 className="text-xl font-poppins font-bold relative z-10">Tambah Catatan Baru</h2>
            <p className="text-emerald-100 text-xs opacity-80 relative z-10">Tulis memo internal admin toko di bawah.</p>
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <form className="p-6 space-y-4 font-barlow" onSubmit={handleSubmit}>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Judul Catatan</label>
              <input
                type="text"
                name="title"
                value={dataForm.title}
                placeholder="Contoh: Stok Saus Menipis"
                onChange={handleChange}
                disabled={loading}
                required
                className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2 mb-1 block">Isi Catatan</label>
              <textarea
                name="content"
                value={dataForm.content}
                placeholder="Tulis detail catatan belanja atau memo disini..."
                onChange={handleChange}
                disabled={loading}
                required
                rows="4"
                className="w-full bg-gray-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none text-sm"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition shadow-lg shadow-emerald-100 cursor-pointer border-transparent"
              >
                {loading ? "Mohon Tunggu..." : "Simpan Catatan"}
              </Button>
            </div>
          </form>
        </div>

        {/* KOLOM KANAN: DAFTAR TABEL DATA */}
        <div className="lg:col-span-2 w-full">
          
          {/* State 1: Sedang Loading */}
          {loading && notes.length === 0 && (
            <div className="py-12 flex justify-center bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
              <LoadingSpinner text="Memuat catatan..." />
            </div>
          )}

          {/* State 2: Data Kosong & Tidak Error */}
          {!loading && notes.length === 0 && !error && (
            <div className="border-2 border-dashed border-gray-200 rounded-[2rem] p-12 text-center bg-white">
              <EmptyState text="Belum ada catatan. Tambah catatan pertama melalui form di sebelah kiri!" />
            </div>
          )}

          {/* State 3: Data Kosong Karena Error Fetching */}
          {!loading && notes.length === 0 && error && (
            <div className="border-2 border-dashed border-red-200 rounded-[2rem] p-12 text-center bg-red-50/10">
              <EmptyState text="Terjadi Kesalahan. Gagal memuat data dari server." />
            </div>
          )}
          
          {/* State 4: Data Berhasil Dimuat */}
          {notes.length > 0 && (
            <div id="custom-notes-table" className="w-full overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
              <GenericTable
                columns={["#", "Judul", "Isi Catatan", "Aksi"]}
                data={notes}
                renderRow={(note, index) => (
                  <>
                    <td className="px-6 py-5 text-sm font-bold text-gray-400 w-16">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-5 font-poppins font-bold text-gray-800 text-base min-w-[140px]">
                      {note.title}
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-gray-600 max-w-md break-words leading-relaxed">
                      {note.content}
                    </td>
                    <td className="px-6 py-5 w-24 text-center">
                      <button
                        onClick={() => handleDelete(note.id || note._id)}
                        disabled={loading}
                        title="Hapus Catatan"
                        className="p-2 inline-flex items-center justify-center rounded-xl hover:bg-red-50 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed group"
                      >
                        <AiFillDelete className="text-red-400 text-2xl group-hover:text-red-600 transition-colors" />
                      </button>
                    </td>
                  </>
                )}
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}