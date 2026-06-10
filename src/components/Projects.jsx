import ProjectCard from './ProjectCard'
import pickAndMixImg from '../assets/Pick and Mix.png'

const projects = [
  {
    id: 1,
    slug: 'project-one',
    title: 'Project One',
    description: 'A short description of what this project is, the problem it solved, and your role in it.',
    tags: ['UX Research', 'Interaction Design'],
    thumbnail: null,
  },
  {
    id: 2,
    slug: 'commercial-underwriters',
    title: 'Commercial Underwriters',
    description: 'Designing a pick-and-mix cover selection and payment experience for commercial insurance brokers.',
    tags: ['UX Design', 'Interaction Design', 'Insurance'],
    thumbnail: pickAndMixImg,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Selected Work</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
