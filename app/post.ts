import { PrismaClient } from '@prisma/client';
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
  let coverUrl = foundSlug.coverUrl;
  let title = foundSlug.title;
  let description = foundSlug.description;
  let editorjs = foundSlug.editorjs;
  prisma.$disconnect();

  return { id, slug, coverUrl, title, description, editorjs };
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
  let coverUrl = foundSlug.coverUrl;
  let description = foundSlug.description;
  let editorjs = foundSlug.editorjs;

  prisma.$disconnect();

  return { id, slug, coverUrl, title, description, editorjs };
}

export async function createPost(post) {
  await prisma.$connect();
  // prisma create
  await prisma.posts.create({
    data: {
      title: post.title,
      slug: post.slug,
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl,
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
      description: post.description,
      editorjs: post.editorjs,
      coverUrl: post.coverUrl,
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
