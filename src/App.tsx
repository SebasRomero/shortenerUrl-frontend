import { ChangeEvent, useState } from "react";
import "./App.css";
import GetUrl from "./components/GetUrl";
import { shortUrl } from "./types/types";
import TemporaryDrawer from "./components/Drawer";

function App() {
  const [shortUrl, setShortUrl] = useState<shortUrl | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const body = {
    longUrl: inputValue,
  };

  const createShortUrl = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let url;
    try {
      url = new URL(body.longUrl);
      setError(false)
    } catch (error) {
      setError(true)
    }

    if (url) {
      const response = await fetch("https://shortener-url.fly.dev", {
        method: "POST",
        body: JSON.stringify(body),
      });
      
      setError(true)
      const data: shortUrl = await response.json();
      setShortUrl(data);
    }
  };

  const shortenNewUrl = () => {
    setShortUrl(null);
    setInputValue("");
  };

  return (
    <>
      {shortUrl != null ? (
        <GetUrl shortUrl={shortUrl.shortUrl} onShortenNewUrl={shortenNewUrl} />
      ) : (
        
        <div className="flex w-full h-screen">
            <TemporaryDrawer/>
            <div className="border-[#e0ddda]lg:p-16 md:p-8 px-2 py-8 mx-auto flex justify-center items-center w-full">
              <form>
                <div className="lg:p-8 md:p-4 border-[#c5c1c1] border-2 w-full md:w-[300px] lg:w-[500px]">
                  <div className="flex justify-center items-start">

                    <label className="block mb-12 font-semibold text-md md:text-2xl lg:text-2xl ">
                      Shorten your long url
                    </label>
                  </div>
                  <input
                    className="bg-gray-100 py-2 px-1 w-full shadow 
                    appearance-none focus:outline-none focus:shadow-outline 
                    leading-tight focus:border-purple-800"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                  />
                  {error ? (<span className="text-red-500">Use a real url</span>) : null}
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-[#06ffb4] mt-4 py-2 px-4 hover:bg-[rgb(95,255,234)]"
                    onClick={createShortUrl}
                  >
                    Shorten
                  </button>
                </div>
              </form>
            </div>
        </div>
      )}
    </>
  );
}

export default App;
