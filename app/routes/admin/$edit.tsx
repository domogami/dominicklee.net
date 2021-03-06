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

// NOTE: This function submits the form data for a new post
export let action = async ({ request }) => {
  // Get the form data
  let formData = await request.formData();
  // Parse the form data
  let title = formData.get('title');
  let coverUrl = formData.get('coverUrl');
  let slug = formData.get('slug');
  let description = formData.get('description');
  let editorjs = formData.get('editorjs');
  let id = formData.get('id');

  console.log('Check the cover image');
  console.log(coverUrl);

  // Error handling
  let errors: any = {};
  if (!title) errors.title = true;
  if (!coverUrl) errors.coverUrl = true;
  if (!slug) errors.slug = true;
  if (!description) errors.description = true;
  if (!editorjs) errors.editorjs = true;

  if (Object.keys(errors).length) {
    return errors;
  }

  await updatePost({ id, title, coverUrl, slug, description, editorjs });

  return redirect('/admin');
};

export default function PostSlug() {
  let errors = useActionData();
  let transition = useTransition();
  let post = useLoaderData();
  const [savedData, setSavedData] = useState('{}');
  const [coverUrl, setCoverUrl] = useState(post.coverUrl);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  async function imageUpload(event: any) {
    let file = event.target.files[0];
    const responseFromAWS = await axios({
      method: 'post',
      url: '/.netlify/functions/uploadImage',
      data: file.name,
    });
    console.log(responseFromAWS.data.url);
    console.log('ATTEMPTING PUT');
    const putResponse = await fetch(responseFromAWS.data.url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: file,
    });
    const imageUrl = putResponse.url.split('?')[0];
    setCoverUrl(imageUrl);
    setIsSelected(true);
  }

  return (
    <Form reloadDocument method='post'>
      <div className='edit-post-container'>
        <h2>Edit Post</h2>
        <img className='cover-preview' src={coverUrl} />
        <p>
          <label htmlFor=''>
            Post Title: {errors?.title && <em>Title is required</em>}{' '}
            <input type='text' name='title' defaultValue={post.title} />
          </label>
        </p>
        <p>
          <label htmlFor=''>
            Post Cover: {errors?.coverUrl && <em>Cover is required</em>}{' '}
            <input
              type='file'
              name='cover'
              value={selectedFile}
              onChange={imageUpload}
            />
          </label>
        </p>
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
          Insert Description:
          <label htmlFor=''>
            <input defaultValue={post.description} name='description' id='' />
          </label>{' '}
          {errors?.description && <em>Description is required</em>}
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
        </p>
        <p className='savePost'>
          <button type='submit'>
            {transition.submission ? 'Saving...' : 'Save Post'}
          </button>
        </p>
        <input
          defaultValue={post.editorjs}
          name='editorjs'
          value={savedData}
          className='hiddenEditorField'
        />
        <label htmlFor=''>
          <input
            className='hidden'
            type='text'
            name='coverUrl'
            defaultValue={coverUrl}
          />
        </label>
        <input className='hidden' name='id' value={post.id}></input>
      </div>
    </Form>
  );
}
