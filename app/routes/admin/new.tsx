import { isErrorResponse } from '@remix-run/react/data';
import { redirect, Form, useActionData, useTransition } from 'remix';
import { createPost } from '~/post';

import Editor from '~/components/editor.client';
import { ClientOnly } from 'remix-utils';
import { useState } from 'react';
const axios = require('axios').default;

export let action = async ({ request }) => {
  let formData = await request.formData();

  let title = formData.get('title');
  let coverUrl = formData.get('coverUrl');
  let slug = formData.get('slug');
  let description = formData.get('description');
  let editorjs = formData.get('editorjs');
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

  await createPost({ title, coverUrl, slug, description, editorjs });

  return redirect('/admin');
};

export default function NewPost() {
  // pull in errors from our action using the useActionData() hook
  let errors = useActionData();
  // transition will allow us to create a better user experience by updating the text of the submit button while creating the blog post
  let transition = useTransition();
  // we are going to create the slug for the user
  let slug = '';

  // as the Title input is updated we will generate the slug automatically.
  // My First Post slug would equal 'my-first-post'. We will convert to lower case and we will strip spaces and replace with hyphens
  const handleChange = (e) => {
    let text = e.target.value;
    // using regex and replace, let's convert spaces to dashes
    slug = text.replace(/\s/g, '-');
    // lets set the value of the slug text box to be our new slug in lowercase
    document.getElementById('slugInput').value = slug.toLowerCase();
  };

  const [savedData, setSavedData] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
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
      <div className='new-post-container'>
      <p>
        <label htmlFor=''>
          Post Title: {errors?.title && <em>Title is required</em>}{' '}
          <input onChange={handleChange} type='text' name='title' />
        </label>
      </p>

      <img className='cover-preview' src={coverUrl} />
      <p>
        <label htmlFor=''>
          {' '}
          Post Slug: {errors?.slug && <em>Slug is required</em>}
          <input placeholder={slug} id='slugInput' type='text' name='slug' />
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
        Insert Description:
        <label htmlFor=''>
          <input defaultValue={""} name='description' id='' />
        </label>{' '}
        {errors?.description && <em>Description is required</em>}
        <br />
        <ClientOnly>
          {() => (
            <Editor
              previousData={"{}"}
              saveOutput={savedData}
              save={(savedData: any) => setSavedData(savedData)}
            />
          )}
        </ClientOnly>
      </p>
      <input
        name='editorjs'
        defaultValue={savedData}
        value={savedData}
      />
      <label htmlFor=''>
        <input
          // className='hidden'
          type='text'
          name='coverUrl'
          defaultValue={coverUrl}
        />
      </label>
      <p>
        <button type='submit'>
          {transition.submission ? 'Creating...' : 'Create Post'}
        </button>
      </p>
     </div> 
    </Form>
  );
}
