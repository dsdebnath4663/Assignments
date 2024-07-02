
function SkillItem({ name, level }) {
  return (
    <li>
      <span>{name}</span>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${level}%` }}>{`${level}%`}</div>
      </div>
    </li>
  );
}



export default SkillItem;
