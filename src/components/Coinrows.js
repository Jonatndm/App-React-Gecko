import React from 'react'

const Coinrows = ({coin, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} width='24px' className='me-2 image-fluid'></img>
                <span>

                {coin.name}
                </span>
                
            </td>
            <td><span className='text-muted text-uppercase'>{coin.symbol}</span></td>
            <td>${coin.current_price}</td>
            <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
                {coin.price_change_percentage_24h}
                </td>
            <td>{coin.total_volume}</td>



        </tr>
    )
}

export default Coinrows
