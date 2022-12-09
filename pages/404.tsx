import Link from 'next/link';

interface Props {
  //   text: string;
}

export default function NotFound({}: Props) {
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
