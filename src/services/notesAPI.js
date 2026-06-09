import axios from 'axios'

const API_URL = "https://ylbudhekpgrtmpmzyoff.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsYnVkaGVrcGdydG1wbXp5b2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDUxNzgsImV4cCI6MjA5NjUyMTE3OH0.t7QHUrTFJurT11qMQ4rHw3mbhulaYSO3ndomPV7o_Pw"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    // Fungsi mengambil semua data catatan
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    // Fungsi membuat catatan baru
    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    // Fungsi menghapus catatan berdasarkan ID menggunakan method DELETE
    async deleteNote(id) {
        const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
        return response.data
    }
}