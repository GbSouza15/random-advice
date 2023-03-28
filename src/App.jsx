import { useEffect, useState } from "react";
import './App.css'

function App() {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(loading) {
            async function fetchData() {
                const response = await fetch('https://api.adviceslip.com/advice')
                const result = await response.json()
                setData(result.slip.advice)
                console.log(result)
                setLoading(false)
            }

                fetchData()
        }
    }, [loading])


    function Conselho() {
        return (
            <p className='advice'>{data}</p>
        )
    }

    function handleClick() {
        setLoading(true)
    }


  return (
      <div className='app'>
          <div className='title'>
              <h1 className='title-page'>Random Advice</h1>
          </div>
          <button className='btn' onClick={handleClick}>Generate</button>
          <Conselho/>
      </div>
  )
}

export default App
