import Seo from '../components/Seo.jsx'
import About from '../sections/About.jsx'
import Stats from '../sections/Stats.jsx'
import Process from '../sections/Process.jsx'

export default function AboutPage() {
  return (<><Seo title="About" description="Software Engineering student and Full-Stack Web Developer building modern web applications." /><About standalone /><Stats /><Process /></>)
}
