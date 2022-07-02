import { useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from '~/post';
import EditorjsReact from '~/components/editorjsReact.client';
import { ClientOnly } from 'remix-utils';

export let loader = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
};

export default function PostSlug() {
  let post = useLoaderData();
  return (
    <div className='blog-post-container'>
      <h1>{post.title}</h1>
      <img className='cover-image' src={post.coverUrl} />
      <ClientOnly>
        {() => <EditorjsReact previousData={post.editorjs} />}
      </ClientOnly>
    </div>
  );
}
