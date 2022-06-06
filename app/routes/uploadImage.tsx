import upload from '~/s3.server';
import type { ActionFunction } from '@remix-run/node'; // or "@remix-run/cloudflare"
import { json } from '@remix-run/node'; // or "@remix-run/cloudflare"
import multer from 'multer';

// const uploadM = multer({
//   storage: multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

export const action: ActionFunction = async ({ request }) => {
  const uploadM = multer({ dest: 'uploads/' });

  uploadM.single('image');

  if (request.method !== 'POST') {
    return json({ message: 'Method not allowed' }, 405);
  }
  console.log(request.body);
  // uploadMulter.single('image');
  console.log('made it this far');
  console.log('Post Request Below');
  // console.log(request);
  console.log('Request Body Below');

  // const response = await upload(request);
  // console.log('Response Below');
  // console.log(response);
  // const payload = await request.json();

  // return json({ success: true }, 200);
  return {
    success: 1,
    file: {
      url: 'https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg',
      // any other image data you want to store, such as width, height, color, extension, etc
    },
  };
};
