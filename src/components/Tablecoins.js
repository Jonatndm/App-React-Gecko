import React from 'react'
import Coinrows from "./Coinrows";

const titles = ['#', 'Coin', 'Symbol', 'Price', 'Price change', '24h Volume']

const Tablecoins = ({coins, search}) => {
    
    const FilterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return ( 
       <table className='table table-light mt-4 table-hover'>
           <thead>
            <tr>
                {
                    titles.map((title, index) => (
                        <td key={index}>{title}</td>
                    ))
                }
            </tr>
           </thead>
           
           <tbody>
            {FilterCoins.map((coin, index) => (
                <Coinrows coin={coin} key={index} index={index + 1} />               
            ))}
           </tbody>
       </table> 
       )
}

export default Tablecoins