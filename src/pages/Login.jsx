import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../store'

export default function Login() {
  const { login } = useStore()
  const nav = useNavigate()
  const { state } = useLocation()
  const [f, setF] = useState({ email: '', password: '' })
  const [err, setErr] = useState('')
  const submit = (e) => {
    e.preventDefault()
    const m = login(f.email.trim().toLowerCase(), f.password)
    m ? setErr(m) : nav(state?.from || '/my-learning')
  }
  return (
    <form className="auth" onSubmit={submit}>
      <h1>Log in</h1>
      {state?.msg && <p className="note">{state.msg}</p>}
      {err && <p className="error">{err}</p>}
      <label>Email<input className="input" type="email" required value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
      <label>Password<input className="input" type="password" required value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /></label>
      <button className="btn block">Log in</button>
      <p className="muted">New here? <Link to="/register">Create an account</Link></p>
    </form>
  )
}
