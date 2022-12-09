import Link from 'next/link';

interface Props {
  //   text: string;
}

export default function Navbar({}: Props) {
  return (
    <nav>
      <div className='logo'>
        <h1>Ninja List</h1>
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
}
