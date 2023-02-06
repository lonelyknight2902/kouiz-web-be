import expressLoader from './configs/expressLoader';
import mongodbLoader from './configs/mongodbLoader';

export default async () => {
  try {
    await mongodbLoader()
    expressLoader();
  } catch (err) {
    console.error(err);
  }
};