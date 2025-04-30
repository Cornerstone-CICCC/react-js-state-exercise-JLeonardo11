type Props = {
    onToggle: () => void;
  };
  
  const LightToggle = ({ onToggle }: Props) => (
    <button onClick={onToggle}>Toggle Lights</button>
  );
  
  export default LightToggle;
  