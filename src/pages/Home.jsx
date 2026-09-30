import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import TechStrip from '../components/TechStrip.jsx'
import About from '../sections/About.jsx'
import Stats from '../sections/Stats.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import Services from '../sections/Services.jsx'
import Process from '../sections/Process.jsx'
import TechStack from '../sections/TechStack.jsx'
import Why from '../sections/Why.jsx'
import Expect from '../sections/Expect.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero /><TechStrip /><About /><Stats /><FeaturedProjects /><Services />
      <Process /><TechStack /><Why /><Expect /><Contact />
    </>
  )
}
