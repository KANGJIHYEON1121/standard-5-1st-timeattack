import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const plusBtn = () => {
    setValue(inputValue + value);
  };

  const resetBtn = () => {
    setInputValue(0);
    setValue(0);
  };

  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{' '}
        만큼을 <button onClick={plusBtn}>더할게요</button>{' '}
        <button>뺄게요</button>
        <button onClick={resetBtn}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}
