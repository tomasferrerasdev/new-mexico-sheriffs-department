import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Image
        src="/sheriff.webp"
        layout="fill"
        objectFit="cover"
        alt="sheriff"
      />
    </>
  );
};

export default Home;
