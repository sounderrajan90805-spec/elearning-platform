import { Link } from 'react-router-dom'
import { courses } from '../data'
import { useStore } from '../store'
import CourseCard from './CourseCard'

export default function MyLearning() {
  const { mine, percent } = useStore()
  const list = courses.filter((c) => mine[c.id])
  const finished = list.filter((c) => percent(c.id) === 100).length
  return (
    <div className="wrap">
      <h1>My learning</h1>
      {list.length ? (
        <>
          <p className="muted">{list.length} enrolled · {finished} completed</p>
          <div className="grid">{list.map((c) => <CourseCard key={c.id} c={c} />)}</div>
        </>
      ) : (
        <p className="empty">You haven't enrolled in any course yet. <Link to="/courses">Find a course</Link></p>
      )}
    </div>
  )
}
