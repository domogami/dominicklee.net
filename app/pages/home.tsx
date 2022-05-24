import ProjectCard from '~/components/projectCard';
import hexagon from '~/images/hexagon.svg';
import logo from '~/images/Logo_Transparent.svg';
import startpage from '~/images/projects/Startpage.png';

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>
          <span className="accent">Dom</span>
          <br />
          Lee
        </h1>
        <div className="vert-rectangle" />
        <img src={logo} />
      </div>
      <div className="projects" id="projects">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="fancy-rectangle" />
        </div>
        <ProjectCard
          image={startpage}
          title="Startpage"
          description="This website is my default startpage that I set to open when I create a new tab or new browser window. It contains helpful quick links of my most frequently visited sites."
          link="/startpage"
        />
      </div>
    </>
  );
}
