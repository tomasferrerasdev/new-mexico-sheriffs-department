import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Image
        src="/sheriff.webp"
        layout="fill"
        objectFit="cover"
        alt="sheriff"
      />
    </div>
  );
};

export default Home;
