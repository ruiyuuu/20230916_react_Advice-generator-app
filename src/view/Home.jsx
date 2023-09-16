import React,{ useState } from 'react'
import axios from 'axios';
import line from '../img/pattern-divider-desktop.svg'
import dice from '../img/icon-dice.svg'
import BeatLoader from "react-spinners/BeatLoader";

export default function Home() {

  const [message,setMessage] = useState("")
  const [loading, setLoading ] = useState(false)

  const submit = () => {
    setLoading(true)
    axios.get('https://api.adviceslip.com/advice')
    .then(function(response){
      if (response.status === 200 ){
        setMessage(response.data.slip.advice)
        setLoading(false)
      }
    })
  }
  



  return (
    <div>
      <div className="card">
        <small>ADVICE #117</small>
        <p>"{loading ? (
            <BeatLoader
            color={"#FFFFFF"}
            loading={loading}
            size={10}
          />
          ) : (message)}"
        </p>
        <img src={line} alt="" />
        <button onClick={submit}>
          {loading ? (
            <BeatLoader
            color={"#FFFFFF"}
            loading={loading}
            size={10}
          />
          ) : (<img src={dice} alt="" />)}
        </button>
      </div>
    </div>
  )
}
