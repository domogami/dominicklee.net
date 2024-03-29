import ProjectCard from '~/components/projectCard';
import hexagon from '~/images/hexagon.svg';
import logo from '~/images/Logo_Transparent.svg';
import startpage from '~/images/projects/Startpage.png';
import oldsite from '~/images/projects/OldSite.png';
import dots from '~/images/projects/Dots.png';

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className='text-bar'>
          <h1>
            <span className='accent'>Dom</span>
            <br />
            Lee
          </h1>
          <div className='vert-rectangle' />
        </div>
        <img src={logo} />
      </div>
      <div className='projects' id='projects'>
        <div className='section-header'>
          <h2>Projects</h2>
          <div className='fancy-rectangle' />
        </div>
        <ProjectCard
          image={startpage}
          title='Startpage'
          description='This website is my default startpage that I set to open when I create a new tab or new browser window. It contains helpful quick links of my most frequently visited sites.'
          link='/startpage'
        />
        <ProjectCard
          image={dots}
          title='Dotfiles'
          description="As someone who is obsessed with optimizing my workflow, I am always improving my dotfiles. If you'd like to check them out you can follow the installation instructions in the README.md"
          link='https://github.com/domogami/.dotfiles'
        />
        <ProjectCard
          image={oldsite}
          title='My Old Website'
          description='This website was my first ever attempt at making a react js site. It was built using Gatsby and deployed with Netlify. It is responsive and served as my previous portfolio.'
          link='https://doms-old-site.netlify.app/'
        />
      </div>
    </>
  );
}
