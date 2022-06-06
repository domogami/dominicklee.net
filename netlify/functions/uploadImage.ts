import { Handler } from '@netlify/functions';
import generateUploadURL from '~/s3.server';

const handler: Handler = async (event, context) => {
  const url = await generateUploadURL(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify({ url: url }),
  };
};

export { handler };
