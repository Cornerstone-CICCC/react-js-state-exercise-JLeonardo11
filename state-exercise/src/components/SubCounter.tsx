type Props = {
    onClick: () => void;
  };


  const ClickCounter2 = ({ onClick }: Props) => (
    <button onClick={onClick}>-</button>
  );
  export default  ClickCounter2;
  