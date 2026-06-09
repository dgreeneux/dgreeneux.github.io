import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A short description of what this project is, the problem it solved, and your role in it.',
    tags: ['UX Research', 'Interaction Design'],
    image: null,
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A short description of what this project is, the problem it solved, and your role in it.',
    tags: ['Visual Design', 'Prototyping'],
    image: null,
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
