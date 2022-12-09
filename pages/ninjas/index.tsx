import Link from 'next/link';
import styles from '../../styles/Ninjas.module.scss';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

interface Props {
  ninjas: any;
}

export default function Ninjas({ ninjas }: Props) {
  return (
    <div className='text-center'>
      <h1>All ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <p className={styles.single}>
            <h3>{ninja.name}</h3>
          </p>
        </Link>
      ))}
    </div>
  );
}
