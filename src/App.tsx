import { useCat } from './hooks/cats.hooks';
import { useInput } from './hooks/inputs.hooks';

const App = () => {
  const { value, handleOnChange } = useInput();
  const { catUrl, handleGetCats, handleGetFactCat } = useCat();
  return (
    <main>
      <h1>Generate Random Cat Image With Custom Text!</h1>
      <input value={value} onChange={handleOnChange} type="text" />
      <button onClick={(e) => handleGetCats(value)} type="submit">
        Kitty Time!
      </button>
      <span>--OR--</span>
      <button onClick={(e) => handleGetFactCat()}>Generate random cat with a fact</button>
      {catUrl && (
        <img width={500} src={catUrl} alt="random cat with custom text from cataas.com api" />
      )}
    </main>
  );
};

export default App;
