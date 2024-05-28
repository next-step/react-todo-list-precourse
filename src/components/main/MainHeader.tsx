type MainHeaderProps = {
  title: string;
};
const MainHeader = ({ title }: MainHeaderProps) => {
  return <header>
    <h1>{ title }</h1>
  </header>
};
export default MainHeader;
