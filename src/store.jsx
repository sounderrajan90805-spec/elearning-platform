import { createContext, useContext, useEffect, useState } from 'react'
import { courses } from './data'

const Ctx = createContext()
export const useStore = () => useContext(Ctx)
const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }

export function Provider({ children }) {
  const [users, setUsers] = useState(() => read('users', []))
  const [user, setUser] = useState(() => read('user', null))
  const [progress, setProgress] = useState(() => read('progress', {}))

  useEffect(() => localStorage.setItem('users', JSON.stringify(users)), [users])
  useEffect(() => localStorage.setItem('user', JSON.stringify(user)), [user])
  useEffect(() => localStorage.setItem('progress', JSON.stringify(progress)), [progress])

  const mine = user ? progress[user.email] || {} : {}

  const register = (name, email, password) => {
    if (users.some((u) => u.email === email)) return 'This email is already registered. Please log in.'
    const u = { name, email, password }
    setUsers([...users, u])
    setUser({ name, email })
    return null
  }
  const login = (email, password) => {
    const u = users.find((x) => x.email === email && x.password === password)
    if (!u) return 'Email or password is incorrect.'
    setUser({ name: u.name, email })
    return null
  }
  const logout = () => setUser(null)
  const update = (fn) => setProgress((p) => ({ ...p, [user.email]: fn(p[user.email] || {}) }))
  const enroll = (id) => update((m) => (m[id] ? m : { ...m, [id]: [] }))
  const toggleLesson = (id, i) =>
    update((m) => {
      const done = m[id] || []
      return { ...m, [id]: done.includes(i) ? done.filter((x) => x !== i) : [...done, i] }
    })
  const isEnrolled = (id) => !!mine[id]
  const percent = (id) => {
    const c = courses.find((x) => x.id === id)
    return c ? Math.round(((mine[id] || []).length / c.lessons.length) * 100) : 0
  }

  return (
    <Ctx.Provider value={{ user, mine, register, login, logout, enroll, toggleLesson, isEnrolled, percent }}>
      {children}
    </Ctx.Provider>
  )
}
