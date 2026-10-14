import { Link, useNavigate, useParams } from 'react-router-dom'
import { courses } from '../data'
import { useStore } from '../store'
import CourseArt from './CourseArt'

export default function CourseDetails() {
  const { id } = useParams()
  const nav = useNavigate()
  const { user, mine, enroll, isEnrolled, toggleLesson, percent } = useStore()
  const c = courses.find((x) => x.id === Number(id))
  if (!c) return <div className="wrap empty">Course not found. <Link to="/courses">Back to courses</Link></div>
  const enrolled = isEnrolled(c.id)
  const done = mine[c.id] || []
  const onEnroll = () => (user ? enroll(c.id) : nav('/login', { state: { msg: 'Log in to enroll in this course.', from: `/courses/${c.id}` } }))

  return (
    <div className="wrap detail">
      <div>
        <p className="muted">{c.category}</p>
        <h1>{c.title}</h1>
        <p>{c.desc}</p>
        <p className="muted">By {c.instructor} · {c.level} · ★ {c.rating} · {c.hours} hours</p>
        <h2>Lessons</h2>
        <ul className="lessons">
          {c.lessons.map((l, i) => (
            <li key={l} className={done.includes(i) ? 'done' : ''}>
              <label>
                <input type="checkbox" disabled={!enrolled} checked={done.includes(i)} onChange={() => toggleLesson(c.id, i)} />
                <span>{i + 1}. {l}</span>
              </label>
            </li>
          ))}
        </ul>
        {!enrolled && <p className="muted">Enroll to start ticking off lessons.</p>}
      </div>
      <aside className="side">
        <div className="cover art">
          <CourseArt id={c.id} />
          <span className="tag">{c.price}</span>
        </div>
        {enrolled ? (
          <>
            <p><strong>{percent(c.id)}% complete</strong> ({done.length}/{c.lessons.length} lessons)</p>
            <div className="bar"><span style={{ width: percent(c.id) + '%' }} /></div>
            <Link to="/my-learning" className="btn block">Go to My Learning</Link>
          </>
        ) : (
          <button className="btn block" onClick={onEnroll}>Enroll for free</button>
        )}
      </aside>
    </div>
  )
}