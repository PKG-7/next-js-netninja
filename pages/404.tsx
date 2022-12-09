import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface Props {
  //   text: string;
}

export default function NotFound({}: Props) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Ooooooopppppsss.....</h1>
      <h2>That page could not be found</h2>
      <p>
        Go back bech <Link href='/'>Home</Link>{' '}
      </p>
    </div>
  );
}
