import { useSearchParams } from 'react-router-dom'
import { courses, categories } from '../data'
import CourseCard from './CourseCard'

export default function Courses() {
  const [params, setParams] = useSearchParams()
  const category = params.get('category') || 'All'
  const q = params.get('q') || ''
  const set = (k, v) => {
    const p = new URLSearchParams(params)
    v && v !== 'All' ? p.set(k, v) : p.delete(k)
    setParams(p, { replace: true })
  }
  const list = courses.filter(
    (c) =>
      (category === 'All' || c.category === category) &&
      (c.title + c.instructor + c.category).toLowerCase().includes(q.toLowerCase())
  )
  return (
    <div className="wrap">
      <h1>All courses</h1>
      <input className="input" type="search" placeholder="Search by course, instructor or topic" value={q} onChange={(e) => set('q', e.target.value)} />
      <div className="chips">
        {['All', ...categories].map((c) => (
          <button key={c} className={c === category ? 'chip on' : 'chip'} onClick={() => set('category', c)}>{c}</button>
        ))}
      </div>
      {list.length ? (
        <div className="grid">{list.map((c) => <CourseCard key={c.id} c={c} />)}</div>
      ) : (
        <p className="empty">No courses match your search. Try another word or choose All.</p>
      )}
    </div>
  )
}
