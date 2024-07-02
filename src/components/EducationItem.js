
function EducationItem({ title, institution, duration }) {
  return (
    <div className="education-item">
      <h3>{title}</h3>
      <p>{institution}</p>
      <p>{duration}</p>
    </div>
  );
}


export default EducationItem;
