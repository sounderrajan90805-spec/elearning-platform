import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStore } from '../store'

export default function Register() {
  const { register } = useStore()
  const nav = useNavigate()
  const [f, setF] = useState({ name: '', email: '', password: '', confirm: '' })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (f.password.length < 6) return setErr('Password must be at least 6 characters.')
    if (f.password !== f.confirm) return setErr('Passwords do not match.')
    const m = register(f.name.trim(), f.email.trim().toLowerCase(), f.password)
    m ? setErr(m) : nav('/courses')
  }
  return (
    <form className="auth" onSubmit={submit}>
      <h1>Create your account</h1>
      {err && <p className="error">{err}</p>}
      <label>Full name<input className="input" required value={f.name} onChange={set('name')} /></label>
      <label>Email<input className="input" type="email" required value={f.email} onChange={set('email')} /></label>
      <label>Password<input className="input" type="password" required value={f.password} onChange={set('password')} /></label>
      <label>Confirm password<input className="input" type="password" required value={f.confirm} onChange={set('confirm')} /></label>
      <button className="btn block">Sign up</button>
      <p className="muted">Already have an account? <Link to="/login">Log in</Link></p>
    </form>
  )
}
