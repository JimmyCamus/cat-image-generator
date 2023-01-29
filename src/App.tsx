import { useCat } from './hooks/cats.hooks';
import { useInput } from './hooks/inputs.hooks';

const App = () => {
  const { value, handleOnChange } = useInput();
  const { catUrl, isLoading, handleGetCats, handleGetFactCat } = useCat();
  return (
    <main className="flex flex-col items-center">
      <div className="w-[90vw] lg:w-1/2">
        <h1 className="text-3xl my-5 text-center ">Generate Random Cat Image With Custom Text</h1>
        <section className="flex flex-col items-center">
          <div className='flex flex-col lg:flex-row'>
            <input
              className="input input-primary my-6 lg:my-0"
              value={value}
              onChange={handleOnChange}
              placeholder="Enter your sentence"
              type="text"
            />
            <button className="btn mx-4" onClick={(e) => handleGetCats(value)} type="submit">
              Kitty Time!
            </button>
          </div>
          <div className="w-full flex flex-row items-center my-5">
            <span className={`w-full h-[1px] bg-secondary`}></span>
            <span className="mx-3">OR</span>
            <span className={`w-full h-[1px] bg-secondary`}></span>
          </div>
          <button className="btn" onClick={(e) => handleGetFactCat()}>
            Generate random cat with a fact
          </button>
        </section>
        <section className="flex flex-col items-center my-8">
          {isLoading ? (
            <progress className="progress progress-secondary"></progress>
          ) : (
            <img
              className="max-w-[300px] lg:max-w-[700px] lg:max-h-[700px]"
              src={catUrl}
              alt="random cat with custom text from cataas.com api"
            />
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
