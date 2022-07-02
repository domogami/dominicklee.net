import { getPosts } from '~/post.ts';
import { Link, Outlet, useLoaderData } from 'remix';

export let loader = () => {
  return getPosts();
};

export default function Index() {
  let posts = useLoaderData();
  return (
    <div className='blog-container'>
      <div className='blog-hero'>
        <h1>
          Welcome to <br />
          my <span className='accent'>Blog</span>
        </h1>
        <div className='rectangle-container'>
          <div className='fancy-rectangle' />
        </div>
      </div>
      <ul className='post-list'>
        {posts.map((post) => (
          <Link className='post' to={post.slug}>
            <li key={post.slug}></li>
            <div className='post-container'>
              <img src={post.coverUrl} />
              <div className='fancy-rectangle' />
              <div className='post-text'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </ul>{' '}
    </div>
  );
}
