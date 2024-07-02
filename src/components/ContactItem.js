
function ContactItem({ icon, text, link }) {
  return (
    <p>
      <i className={`fa ${icon}`} aria-hidden="true"></i>
      <a href={link}>{text}</a>
    </p>
  );
}


export default ContactItem;