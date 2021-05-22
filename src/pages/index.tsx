import FeatAuthors from '../components/FeatAuthors'
import FeatTechs from '../components/FeatTechs'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatTechs />
      <FeatAuthors />
    </>
  )
}
