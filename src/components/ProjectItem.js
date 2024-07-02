
function ProjectItem({ title, description, details, techStack, links }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}:</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p>{techStack}</p>
      {links.map((link, index) => (
        <p key={index}><a href={link}>{link}</a></p>
      ))}
    </div>
  );
}

export default ProjectItem;