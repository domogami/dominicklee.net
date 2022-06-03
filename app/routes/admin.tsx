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
      <div className="admin-container">
        <h1 className="adminTitle">Admin</h1>
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
            {/* Outlet renders the /admin/index.jsx */}
            <Outlet />
          </main>
        </nav>
      </div>
    </>
  );
}
