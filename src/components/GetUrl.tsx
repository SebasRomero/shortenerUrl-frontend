import { shortUrl } from "../types/types";
import TemporaryDrawer from "./Drawer";

const GetUrl = (props: shortUrl) => {

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.shortUrl);
      const inputElement = document.getElementById('inp') as HTMLInputElement;
      inputElement.select();
    } catch {
      console.log("Error");
    }
  };

  const handleShortenNewUrl = () => {
    props.onShortenNewUrl();
  };



  return (
    <div className="flex w-full h-screen">
      <TemporaryDrawer/>
      <div className="flex justify-center items-center w-full p-2">

      <div className="border-[#e0ddda] border-2 mx-auto p-2 lg:p-12 md:p-6">
        <div className="flex">
          <input
            id="inp"
            className="bg-gray-50 py-2 px-1 w-full shadow 
            appearance-none focus:outline-none focus:shadow-outline 
            leading-tight"
            type="text"
            value={props.shortUrl}
            readOnly
            />
          <button className="px-1 mx-2" onClick={copy}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 0 1-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0 1 13.5 1.5H15a3 3 0 0 1 2.663 1.618ZM12 4.5A1.5 1.5 0 0 1 13.5 3H15a1.5 1.5 0 0 1 1.5 1.5H12Z" clipRule="evenodd" />
            <path d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 0 1 9 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0 1 16.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625v-12Z" />
            <path d="M10.5 10.5a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963 5.23 5.23 0 0 0-3.434-1.279h-1.875a.375.375 0 0 1-.375-.375V10.5Z" />
          </svg>
          </button>
        </div>
        <div className="flex justify-between mt-8">
          <button className="p-2 bg-[#06ffb4]" onClick={handleShortenNewUrl}>Shorten a new one</button>
          <button className="p-2 bg-[#06ffb4]"><a href={props.shortUrl}>Visit url</a></button>
        </div>
      </div>
            </div>
    </div>
  );
};

export default GetUrl;
