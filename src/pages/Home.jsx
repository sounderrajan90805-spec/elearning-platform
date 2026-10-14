import { Link } from 'react-router-dom'
import { courses, categories } from '../data'
import CourseCard from './CourseCard'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Pick a course. Finish one lesson today.</h1>
          <p>Free beginner-friendly courses in web development, data, design and more. Enroll, tick off lessons and watch your progress grow.</p>
          <div className="row">
            <Link to="/courses" className="btn">Browse courses</Link>
            <Link to="/register" className="btn ghost">Create free account</Link>
          </div>
        </div>
      </section>
      <section className="wrap">
        <h2>Learn by topic</h2>
        <div className="chips">
          {categories.map((c) => (
            <Link key={c} to={`/courses?category=${encodeURIComponent(c)}`} className="chip">{c}</Link>
          ))}
        </div>
      </section>
      <section className="wrap">
        <h2>Popular courses</h2>
        <div className="grid">{courses.slice(0, 4).map((c) => <CourseCard key={c.id} c={c} />)}</div>
      </section>
    </>
  )
}
