import { PrismaClient } from '@prisma/client';
import { marked } from 'marked';
const prisma = new PrismaClient();
import upload from './s3.server';

export async function getPost(slug) {
  //setup our prisma connection
  await prisma.$connect();

  // we will find the first database entry that matches the passed slug
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug: slug,
    },
  });
  let id = foundSlug.id;
  //let's extract the title
  let title = foundSlug.title;
  // using marked, we are going to convert the markdown into HTML so the blog post can render as entered in Markdown.
  let html = marked(foundSlug.markdown);
  let editorjs = foundSlug.editorjs;
  // we need to cleanup our database connection
  prisma.$disconnect();

  // let's send back the slug, the title, and our markdown converted to html
  return { id, slug, title, html, editorjs };
}

//when we edit the post we want to return different data including the ID field
export async function getPostEdit(slug) {
  await prisma.$connect();

  // we will find the first database entry that matches the passed slug
  const foundSlug = await prisma.posts.findFirst({
    where: {
      slug: slug,
    },
  });
  let id = foundSlug.id;
  //let's extract the title
  let title = foundSlug.title;
  // since we are editing and not rendering we want to pull the original markdown value stored in the db
  let markdown = foundSlug.markdown;
  let editorjs = foundSlug.editorjs;

  prisma.$disconnect();

  // let's send back the slug, the title, and our markdown converted to html
  return { id, slug, title, markdown, editorjs };
}

export async function createPost(post) {
  await prisma.$connect();
  // prisma create
  await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown,
      editorjs: post.editorjs,
    },
  });

  prisma.$disconnect();
  // let's send back the slug we created
  return getPost(post.slug);
}

export async function updatePost(post) {
  await prisma.$connect();
  // prisma create
  console.log('updatePost id', post.id);
  await prisma.posts.update({
    where: {
      id: post.id,
    },
    data: {
      title: post.title,
      slug: post.slug,
      markdown: post.markdown,
      editorjs: post.editorjs,
    },
  });

  prisma.$disconnect();
  // let's send back the slug we created
  return getPost(post.slug);
}

// async function since we will be loading external data
export async function getPosts() {
  await prisma.$connect();
  // let's grab all posts using findMany()
  // the posts in prisma.posts is the collection we created in Mongo.db
  const allPosts = await prisma.posts.findMany();

  prisma.$disconnect();
  // let's see what we are returning
  //  console.log(allPosts)
  return allPosts;
}

export async function uploadImage(file: any) {
  return await upload(file);
}
