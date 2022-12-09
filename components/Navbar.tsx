import Link from 'next/link';
import Image from 'next/image';

interface Props {
  //   text: string;
}

export default function Navbar({}: Props) {
  return (
    <nav>
      <div className='logo'>
        <Image src='/logo.png' width={128} height={77} alt='logo' priority />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
}
