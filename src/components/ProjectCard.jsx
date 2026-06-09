export default function ProjectCard({ title, description, tags, image }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {image
          ? <img src={image} alt={title} />
          : <div className="project-image-placeholder" />}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        {tags && (
          <ul className="project-tags">
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
