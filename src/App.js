import {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'
import Tablecoins from './components/Tablecoins'


function App() {
  
  const [coins, setcoins] = useState([])
  const [search, setsearch] = useState('')

  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    setcoins(res.data)
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="container">
      <div className='row'>
        <input type='text' placeholder='Seach a Coin' className='form-control bg-ligth text-light mt-4 text-center border-0' onChange={e => setsearch(e.target.value)}></input>
        <Tablecoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
