import { Link } from 'react-router-dom'
import { useStore } from '../store'
import CourseArt from './CourseArt'

export default function CourseCard({ c }) {
  const { isEnrolled, percent } = useStore()
  const enrolled = isEnrolled(c.id)
  return (
    <Link to={`/courses/${c.id}`} className="card">
      <div className="cover art">
        <CourseArt id={c.id} />
        <span className="tag">{c.category}</span>
      </div>
      <div className="body">
        <h3>{c.title}</h3>
        <p className="muted">{c.instructor} · {c.level}</p>
        <p className="muted">★ {c.rating} · {c.hours} hours · {c.lessons.length} lessons</p>
        {enrolled && (
          <div className="bar"><span style={{ width: percent(c.id) + '%' }} /></div>
        )}
        {enrolled && <small>{percent(c.id)}% complete</small>}
      </div>
    </Link>
  )
}