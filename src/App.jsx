import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </HashRouter>
  )
}
