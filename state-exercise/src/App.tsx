import { useState } from 'react';
import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import ClickCounter2 from './components/SubCounter';


const App = () => {
  const [isLightsOn, setIsLightsOn] = useState(true);
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const [count, setCount] = useState(0);

  const handleToggle = () => setIsLightsOn(!isLightsOn);
  const handleGenerate = () => {
    const nums = Array.from(new Set(Array.from({ length: 10 }, () => Math.ceil(Math.random() * 50))));
    setLottoNumbers(nums.slice(0, 7));
  };
  const sub = () => setCount(p => p - 1);
  const add = () => setCount(p => p + 1);

  return (
    <>
      

      <h2>Light Toggle</h2>
      <LightToggle onToggle={handleToggle} />
      <div style={{
        backgroundColor: isLightsOn ? 'white' : 'black',
        height: 100,
        marginBottom: 20
      }} />

      <h2>Lotto Numbers</h2>
      <LottoNumbers onGenerate={handleGenerate} />
      <div>{lottoNumbers.join(', ')}</div>

      <h2>Add</h2>
      <ClickCounter onClick={add} />
      <h2></h2>

      <ClickCounter2 onClick={sub} />
      <div>{count}</div>
    </>
  );
};

export default App;
