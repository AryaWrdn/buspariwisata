import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom" // Tambahkan useNavigate
import axios from "axios" // Import Axios
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import "./design.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate() // Untuk pindah halaman otomatis

  // Fungsi Submit yang baru
  const submitForm = async (e) => {
    e.preventDefault()

    try {
      // 1. Kirim data ke API Laravel
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      })

      // 2. Jika login berhasil (Status 200)
      if (response.status === 200) {
        // Simpan status login di browser agar Navbar bisa berubah
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userData", JSON.stringify(response.data.user))

        alert("Login Berhasil!")

        // 3. Arahkan ke halaman utama (Home)
        navigate("/")

        // Refresh halaman sebentar agar Navbar mendeteksi perubahan localStorage
        window.location.reload()
      }
    } catch (error) {
      // 4. Jika error (email/password salah atau server mati)
      console.error(error)
      alert(error.response?.data?.message || "Login Gagal! Periksa koneksi backend.")
    }

    // Reset input (opsional, biasanya tidak perlu jika langsung redirect)
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form action='' onSubmit={submitForm}>
              <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
              <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />

              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
                <div className='flex'>
                  <span>I forgot my password</span>
                </div>
              </div>

              <button type='submit' className='primary-btn'>
                Sign In
              </button>
              <p>
                Don't have account? <Link to='/register'>Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bagian 'show-data' dihapus karena di aplikasi asli 
          data tidak boleh ditampilkan di bawah form login demi keamanan */}
    </>
  )
}

export default Login