type Props = {
    onGenerate: () => void;
  };
  
  const LottoNumbers = ({ onGenerate }: Props) => (
    <button onClick={onGenerate}>Generate Lotto Numbers</button>
  );
  
  export default LottoNumbers;