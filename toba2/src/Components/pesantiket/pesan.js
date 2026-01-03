import React, { useState } from 'react'; // Tambahkan useState
import axios from 'axios'; // Pastikan sudah install: npm install axios
import './OrderTiket.css';

const OrderTiket = () => {
    // 1. Inisialisasi State sesuai dengan field di database Laravel
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        telepon: '',
        tanggal: '',
        jumlah: 1,
        pesan: ''
    });

    // 2. Fungsi untuk mengupdate state saat input diketik
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. Fungsi untuk mengirim data ke API Laravel
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Ganti URL dengan URL API Laravel Anda
            const response = await axios.post('http://127.0.0.1:8000/api/order-tiket', formData);

            alert("Berhasil! " + response.data.message);
            // Optional: Reset form setelah berhasil
            setFormData({ nama: '', email: '', telepon: '', tanggal: '', jumlah: 1, pesan: '' });
        } catch (error) {
            console.error("Error mengirim data:", error.response);
            alert("Gagal mengirim pesanan. Periksa koneksi backend Anda.");
        }
    };

    return (
        <div className="order-section">
            <div className="order-wrapper">

                {/* Sisi Kiri: Hubungi Kami */}
                <div className="order-left">
                    {/* <img src="logo-bus.png" alt="Logo" /> */}
                    <h2>Hubungi Kami</h2>
                    <p>Silakan isi formulir untuk memesan tiket perjalanan Anda.</p>
                    <div className="contact-info">
                        <p>📍 Jl. Raya Toba No. 123</p>
                        <p>📞 +62 812-3456-7890</p>
                        <p>✉️ support@tobatravel.com</p>
                    </div>
                </div>

                {/* Sisi Kanan: Form */}
                <div className="order-right">
                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nama Lengkap</label>
                            <input
                                type="text"
                                name="nama"
                                value={formData.nama}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Nomor Telepon/WA</label>
                            <input
                                type="tel"
                                name="telepon"
                                value={formData.telepon}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Tanggal Perjalanan</label>
                            <input
                                type="date"
                                name="tanggal"
                                value={formData.tanggal}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Jumlah Tiket</label>
                            <input
                                type="number"
                                name="jumlah"
                                min="1"
                                value={formData.jumlah}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group full-width">
                            <label>Catatan Tambahan</label>
                            <textarea
                                name="pesan"
                                rows="4"
                                value={formData.pesan}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="full-width">
                            <button type="submit" className="btn-submit">Pesan Sekarang</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default OrderTiket;