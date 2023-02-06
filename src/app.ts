import expressLoader from './configs/expressLoader';

export default async () => {
  try {
    expressLoader();
  } catch (err) {
    console.error(err);
  }
};