import invariant from 'tiny-invariant';
import { getPostEdit } from '~/post';
import {
  redirect,
  Form,
  useActionData,
  useTransition,
  useLoaderData,
} from 'remix';
import { updatePost } from '~/post';
import Editor from '~/components/editor.client';
import { ClientOnly } from 'remix-utils';
import { useState } from 'react';

export let loader = async ({ params }) => {
  invariant(params.edit, 'expected params.edit');
  return getPostEdit(params.edit);
};

export let action = async ({ request }) => {
  console.log('going to submit form');
  let formData = await request.formData();

  let title = formData.get('title');
  let slug = formData.get('slug');
  let markdown = formData.get('markdown');
  let editorjs = formData.get('editorjs');
  let id = formData.get('id');

  // let errors = {};
  // if (!title) errors.title = true;
  // if (!slug) errors.slug = true;
  // if (!markdown) errors.markdown = true;
  // if (!editorjs) errors.editorjs = true;

  // if (Object.keys(errors).length) {
  //   return errors;
  // }

  console.log(
    'calling updatePost with id, title, slug, markdown: ',
    id,
    title,
    slug,
    markdown,
    editorjs
  );
  await updatePost({ id, title, slug, markdown, editorjs });

  return redirect('/admin');
};
// let savedData = null;
export default function PostSlug() {
  let errors = useActionData();
  let transition = useTransition();
  let post = useLoaderData();
  const [savedData, setSavedData] = useState('{}');
  // const [savedOutput, setSavedOutput] = useState('{}');

  // const passFunction = (saveOutput) => {
  //   setSavedData(saveOutput);
  // };

  return (
    <Form reloadDocument method="post">
      <p>
        <input className="hiddenBlogID" name="id" value={post.id}></input>
      </p>
      <p>
        <label htmlFor="">
          Post Title: {errors?.title && <em>Title is required</em>}{' '}
          <input type="text" name="title" defaultValue={post.title} />
        </label>
      </p>
      <p>
        <label htmlFor="">
          {' '}
          Post Slug: {errors?.slug && <em>Slug is required</em>}
          <input
            defaultValue={post.slug}
            id="slugInput"
            type="text"
            name="slug"
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{' '}
        {errors?.markdown && <em>Markdown is required</em>}
        <br />
        <ClientOnly>
          {() => (
            <Editor
              previousData={post.editorjs}
              saveOutput={savedData}
              save={(savedData: any) => setSavedData(savedData)}
            />
          )}
        </ClientOnly>
        <input
          defaultValue={post.editorjs}
          name="editorjs"
          value={savedData}
          id=""
        ></input>
        <textarea defaultValue={post.markdown} name="markdown" id="" />
      </p>
      <p>
        <button type="submit">
          {transition.submission ? 'Updating...' : 'Update Post'}
        </button>
      </p>
    </Form>
  );
}
