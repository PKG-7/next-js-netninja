export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return { paths, fallback: false };
};

interface Props {
  //   text: string;
}

export default function Details({}: Props) {
  return (
    <div className='text-center'>
      <h1>Details page</h1>
    </div>
  );
}
