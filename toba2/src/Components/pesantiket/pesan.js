import React from 'react';
import './OrderTiket.css';

const OrderTiket = () => {
    return (
        <div className="order-section">
            <div className="order-wrapper">

                {/* Sisi Kiri: Hubungi Kami */}
                <div className="order-left">
                    <img src="logo-bus.png" alt="Logo" />
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
                    <form className="order-form">
                        <div className="form-group">
                            <label>Nama Lengkap</label>
                            <input type="text" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>

                        <div className="form-group">
                            <label>Nomor Telepon/WA</label>
                            <input type="tel" />
                        </div>

                        <div className="form-group">
                            <label>Tanggal Perjalanan</label>
                            <input type="date" />
                        </div>

                        <div className="form-group full-width">
                            <label>Jumlah Tiket</label>
                            <input type="number" min="1" />
                        </div>

                        <div className="form-group full-width">
                            <label>Catatan Tambahan</label>
                            <textarea rows="4"></textarea>
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