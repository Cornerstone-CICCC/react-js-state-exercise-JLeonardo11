type Props = {
    onClick: () => void;
  };
  
  const ClickCounter = ({ onClick }: Props) => (
    <button onClick={onClick}>+</button>
  );

  export default ClickCounter; 