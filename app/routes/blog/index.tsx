import { getPosts } from '~/post.ts';
import { Link, Outlet, useLoaderData } from 'remix';

export let loader = () => {
  return getPosts();
};

export default function Index() {
  let posts = useLoaderData();
  return (
    <div className="blog-container">
      <div className="blog-hero">
        <h1>
          Welcome to <br />
          my <span className="accent">Blog</span>
        </h1>
        <div className="rectangle-container">
          <div className="fancy-rectangle" />
        </div>
      </div>
      <h1>My Remix Blog</h1>
      <p>Click on the post name to read the post</p>
      <ul>
        {posts.map((post) => (
          <li className="postList" key={post.slug}>
            <Link className="postTitle" to={post.slug}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>{' '}
    </div>
  );
}
