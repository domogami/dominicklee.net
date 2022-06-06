import AWS from 'aws-sdk';
import 'dotenv/config';

const bucketName = process.env.MY_AWS_BUCKET_NAME;
const region = process.env.MY_AWS_BUCKET_REGION;
const accessKeyId = process.env.MY_AWS_ACCESS_KEY;
const secretAccessKey = process.env.MY_AWS_SECRET_KEY;

const s3 = new AWS.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

export default async function generateUploadURL(fileName: String) {
  const imageName = fileName;
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };
  const uploadURL = await s3.getSignedUrlPromise('putObject', params);
  return uploadURL;
}
