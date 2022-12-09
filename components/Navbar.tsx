interface Props {
  //   text: string;
}

export default function Navbar({}: Props) {
  return (
    <nav>
      <div>
        <h1>Ninja LList</h1>
      </div>
      <a href=''>Home</a>
      <a href=''>About</a>
      <a href=''>Ninja Listing</a>
    </nav>
  );
}
