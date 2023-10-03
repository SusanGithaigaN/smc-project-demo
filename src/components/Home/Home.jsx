import './Home.css';
import Landing from './Landing';
import About from '../About/About'
import Contact from '../Contact/Contact'

export default function Home() {
  return (
    <div className="almaid">
      <Landing />
      <About />
      <Contact />

    </div>

  )
}
