import SearchBar from "./components/Searchbar"
import { useRef, useState } from "react"
import axios from "axios"

function App() {
  const YTURL = useRef();

  const [jsondata,setjsondata] = useState(null);
  const [showDownload,setShowDownload] = useState(false);

  const HandleSubmitButton = (e) => {
    e.preventDefault();
    console.log(YTURL.current.value);


const options = {
  method: 'GET',
  url: 'https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess',
  params: {
    url: YTURL.current.value,
    format: 'mp3',
    responseFormat: 'json',
    lang: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'e8162adee2mshc038e05bf433beap1238fbjsnc78ab20a7e44',
    'X-RapidAPI-Host': 't-one-youtube-converter.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  // console.log(response.file);
	console.log(response.data.file);
  setjsondata(response.data.file);
}).catch(function (error) {
	console.error(error);
});
  }

const showTheDownload = () =>{
  setShowDownload(!showDownload);
}

  return (
    <>
    <h1>Hi , Insert Youtube link below :)</h1>

    <form onSubmit={HandleSubmitButton}>
    <input placeholder="Enter Link here" ref={YTURL}/>
    <button>Submit</button>
    </form>
    {console.log(jsondata)}
    {jsondata?<a  target='_blank' rel="noreferrer" href={jsondata}><button>Download</button></a>:<h1>FAIL</h1>}
    </>
  );
}

export default App
