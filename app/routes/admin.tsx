import { Outlet, Link, useLoaderData } from 'remix';
import Header from '~/components/header';
import { getPosts } from '~/post';
import { useOutletContext } from '@remix-run/react';
import stylesUrl from '~/styles/app.css';
import { ClientOnly } from 'remix-utils';

// create a stylesheet ref for the admin.css file
export let links = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }];
};

export let loader = () => {
  return getPosts();
};

export type themeSet = {
  theme: String;
};

export default function Admin(props) {
  let posts = useLoaderData();
  const [theme, setTheme] = useOutletContext<themeSet>();
  return (
    <>
      <Header changeTheme={(theme) => setTheme(theme)} />
      <div className='admin-container'>
        {/* NOTE: Outlet renders the /admin/index.jsx */}
        <Outlet />
        <h3>Post's to edit</h3>
        <div className='fancy-rectangle' />
        <ul className='post-list'>
          {posts.map((post) => (
            <Link className='post' to={post.slug}>
              <li key={post.slug}></li>
              <div className="post-container">
                <img src={post.coverUrl} />
                <div className="fancy-rectangle" />
                <div className='post-text'>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

{ /*
<nav>
          <p>Click on a post to edit the blog post</p>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link to={post.slug}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <main>
            <Outlet />
          </main>
        </nav>
*/}
