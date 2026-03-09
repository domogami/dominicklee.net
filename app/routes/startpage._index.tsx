import stylesUrl from '~/styles/app.css';
import startpageImage from '~/images/Logo_Transparent.svg';
import StartpageGridItem from '~/components/startpageGridItem';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  const sectionOne = [
    {
      name: 'office',
      link: 'https://dp7q8vw2s4v0r.cloudfront.net/story-editor',
    },
    { name: 'garden', link: 'https://domogami.github.io/' },
    { name: 'dom', link: 'https://dominicklee.net' },
  ];
  const sectionTwo = [
    {
      name: 'primevideo',
      link: 'https://amazon.com/aiv',
    },
    {
      name: 'amazon',
      link: 'https://amazon.com',
    },
    {
      name: 'sysdesign',
      link: 'https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction',
    },
  ];
  const sectionThree = [
    { name: 'github', link: 'https://github.com' },
    { name: 'dots', link: 'https://github.com/domogami/.dotfiles' },
    { name: 'web', link: 'https://github.com/domogami/dominicklee.net' },
  ];
  const sectionFour = [
    { name: 'youtube', link: 'https://youtube.com' },
    { name: 'reddit', link: 'https://reddit.com' },
    { name: 'jacky', link: 'https://jzhao.xyz/posts/networked-thought' },
  ];
  return (
    <div className='startpage-hero-container'>
      <div className='startpage-hero'>
        <img src={startpageImage} />
        <div className='startpage-grid'>
          <StartpageGridItem title='~/dev' links={sectionOne} />
          <StartpageGridItem title='~/work' links={sectionTwo} />
          <StartpageGridItem title='~/code' links={sectionThree} />
          <StartpageGridItem title='~/fun' links={sectionFour} />
        </div>
      </div>
    </div>
  );
}
