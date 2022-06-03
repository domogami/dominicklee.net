import { useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from '~/post';

import Editor from '~/components/readOnlyEditor.client';
import { ClientOnly } from 'remix-utils';

export let loader = async ({ params }) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
};

export default function PostSlug() {
  let post = useLoaderData();

  return (
    <>
      <div className="blog-post-container">
        <ClientOnly>{() => <Editor previousData={post.editorjs} />}</ClientOnly>
      </div>
      {/* <div */}
      {/*   className="postDisplay" */}
      {/*   dangerouslySetInnerHTML={{ __html: post.html }} */}
      {/* /> */}
    </>
  );
}
