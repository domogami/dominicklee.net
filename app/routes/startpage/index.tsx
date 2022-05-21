import stylesUrl from '~/styles/app.css';
import startpageImage from '~/images/Logo_Transparent.svg';
import StartpageGridItem from '~/components/startpageGridItem';

export const links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export default function Index() {
  const sectionOne = [
    { name: 'stack', link: 'https://stackoverflow.com/' },
    { name: 'google', link: 'https://google.com' },
    { name: 'dom', link: 'localhost:3000/' },
  ];
  const sectionTwo = [
    {
      name: 'amazon',
      link: 'https://www.amazonuniversity.jobs/communitylogin',
    },
    {
      name: 'seattle',
      link: 'https://docs.google.com/spreadsheets/d/1svMX1JvXCcojulCv4LPBB5YL9wpiQsXD1r_l4-xSh4U/edit?usp=sharing',
    },
    {
      name: 'commute',
      link: 'https://www.google.com/maps/dir//Institute+For+Systems+Biology,+401+Terry+Ave+N,+Seattle,+WA+98109/@47.6219859,-122.3406299,15z/data=!3m1!4b1!4m13!4m12!1m0!1m5!1m1!1s0x5490150242acab75:0x5b8f4e4b0f0b5350!2m2!1d-122.3373956!2d47.6223926!2m3!6e0!7e2!8j1652688000!3e0',
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
    { name: 'unixporn', link: 'https://reddit.com/r/unixporn' },
  ];
  return (
    <div className="startpage-hero-container">
      <div className="startpage-hero">
        <img src={startpageImage} />
        <div className="startpage-grid">
          <StartpageGridItem title="~/dev" links={sectionOne} />
          <StartpageGridItem title="~/work" links={sectionTwo} />
          <StartpageGridItem title="~/code" links={sectionThree} />
          <StartpageGridItem title="~/fun" links={sectionFour} />
        </div>
      </div>
    </div>
  );
}
