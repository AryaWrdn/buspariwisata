import React, { useState } from "react"
import { useNavigate } from "react-router-dom" // Untuk pindah halaman setelah daftar
import axios from "axios" // Import Axios
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const navigate = useNavigate()

  const submitForm = async (e) => {
    e.preventDefault()

    // Validasi sederhana: pastikan password cocok sebelum kirim ke API
    if (password !== cpassword) {
      alert("Password dan Konfirmasi Password tidak cocok!")
      return
    }

    try {
      // Kirim data ke API Laravel (Route: /api/register)
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: cpassword, // Field khusus Laravel untuk validasi 'confirmed'
      })

      if (response.status === 201) {
        alert("Akun berhasil dibuat! Silakan login.")
        navigate("/sign-in") // Arahkan user ke halaman login
      }
    } catch (error) {
      console.error(error)
      // Menampilkan pesan error dari Laravel (misal: email sudah terdaftar)
      alert(error.response?.data?.message || "Pendaftaran gagal!")
    }

    // Reset Form
    setName("")
    setEmail("")
    setPassword("")
    setCpassword("")
  }

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form action='' onSubmit={submitForm}>
              <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
              <input type='password' name='cpassword' value={cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder='Confirm Password' required />

              <button type='submit' className='primary-btn'>
                Create an Account
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bagian 'show-data' dihapus karena data user sensitif tidak boleh tampil di UI */}
    </>
  )
}

export default Register