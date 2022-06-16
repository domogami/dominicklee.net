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
const axios = require('axios').default;

export let loader = async ({ params }) => {
  invariant(params.edit, 'expected params.edit');
  return getPostEdit(params.edit);
};

export let action = async ({ request }) => {
  console.log("request:");
  console.log(request);
  console.log('going to submit form');
  let formData = await request.formData();

  let title = formData.get('title');
  let coverImg = formData.get('cover');
  let slug = formData.get('slug');
  let markdown = formData.get('markdown');
  let editorjs = formData.get('editorjs');
  let id = formData.get('id');

  console.log("AWS Upload");
  console.log(coverImg);

  const responseFromAWS = await axios({
    method: 'post',
    url: '/.netlify/functions/uploadImage',
    data: coverImg.name,
  });
  console.log(responseFromAWS.data.url);
  // console.log('ATTEMPTING PUT');
  // const putResponse = await fetch(responseFromAWS.data.url, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   body: coverImg,
  // });
  // const imageUrl = putResponse.url.split('?')[0];
  // const coverUrl = imageUrl;
  // let coverUrl = "https://doms-personal-blog-images.s3.us-west-1.amazonaws.com/Logo_Transparent.png";
  // let coverUrl = coverImg.name;

  let errors: any = {};
  if (!title) errors.title = true;
  // if (!coverUrl) if (!slug) errors.slug = true;
  if (!markdown) errors.markdown = true;
  if (!editorjs) errors.editorjs = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  console.log(
    'calling updatePost with id, title, slug, markdown: ',
    id,
    title,
    coverUrl,
    slug,
    markdown,
    editorjs
  );
  await updatePost({ id, title, coverUrl, slug, markdown, editorjs });

  return redirect('/admin');
};
// let savedData = null;
export default function PostSlug() {
  let errors = useActionData();
  let transition = useTransition();
  let post = useLoaderData();
  const [savedData, setSavedData] = useState('{}');
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const imageUpload = (event) => {
    console.log(event.target.files[0]);
    setIsSelected(true);
  };
  return (
    <Form reloadDocument method='post'>
      <h1>Edit Post</h1>
      <p>
        <input className='hiddenBlogID' name='id' value={post.id}></input>
      </p>
      <p>
        <label htmlFor=''>
          Post Title: {errors?.title && <em>Title is required</em>}{' '}
          <input type='text' name='title' defaultValue={post.title} />
        </label>
      </p>
      <p>
        <label htmlFor=''>
          Post Cover: {errors?.coverUrl && <em>Cover is required</em>}{' '}
          <input type='file' name='cover' value={selectedFile} onChange={imageUpload} />
        </label>
      </p>
      <img src={post.coverUrl} />
      <p>
        <label htmlFor=''>
          {' '}
          Post Slug: {errors?.slug && <em>Slug is required</em>}
          <input
            defaultValue={post.slug}
            id='slugInput'
            type='text'
            name='slug'
          />
        </label>
      </p>
      <p>
        <label htmlFor='markdown'>Markdown from editorjs:</label>{' '}
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
        <textarea defaultValue={post.markdown} name='markdown' id='' />
      </p>
      <p>
        <button type='submit'>
          {transition.submission ? 'Updating...' : 'Update Post'}
        </button>
      </p>
      <input
        defaultValue={post.editorjs}
        name='editorjs'
        value={savedData}
        className='hidenEditorField'
      ></input>
    </Form>
  );
}
