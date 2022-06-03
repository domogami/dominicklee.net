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
    <>
      {/* <section className="blog-post-html"> */}
      <ClientOnly>
        {() => <EditorjsReact previousData={post.editorjs} />}
      </ClientOnly>
      {/*</section>*/}
      {/* <div className="blog-post-container"> */}
      {/*   <ClientOnly>{() => <Editor previousData={post.editorjs} />}</ClientOnly> */}
      {/* </div> */}
      {/* <div */}
      {/*   className="postDisplay" */}
      {/*   dangerouslySetInnerHTML={{ __html: post.html }} */}
      {/* /> */}
    </>
  );
}
