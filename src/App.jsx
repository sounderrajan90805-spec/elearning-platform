import { Routes, Route, Navigate, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useStore } from './store'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import MyLearning from './pages/MyLearning'
import Login from './pages/Login'
import Register from './pages/Register'

function Navbar() {
  const { user, logout } = useStore()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <header className="nav">
      <Link to="/" className="logo">LearnLoop</Link>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'links open' : 'links'}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/my-learning">My Learning</NavLink>
        {user ? (
          <>
            <span className="hello">Hi, {user.name.split(' ')[0]}</span>
            <button className="btn small ghost" onClick={logout}>Log out</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Log in</NavLink>
            <Link to="/register" className="btn small">Sign up</Link>
          </>
        )}
      </nav>
    </header>
  )
}

function Private({ children }) {
  const { user } = useStore()
  return user ? children : <Navigate to="/login" replace state={{ msg: 'Log in to see your courses.' }} />
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/my-learning" element={<Private><MyLearning /></Private>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div className="wrap empty">Page not found. <Link to="/">Go home</Link></div>} />
        </Routes>
      </main>
      <footer className="foot">© 2026 LearnLoop. Learn at your own pace.</footer>
    </>
  )
}
