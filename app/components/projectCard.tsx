export default function ProjectCard(props) {
  return (
    <div className="project-card-container">
      <div className="project-card">
        <img src={props.image} alt="project_photo" />
        <div className="fancy-divider" />
        <div className="text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div id="container">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <a href={props.link} className="button-text">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
