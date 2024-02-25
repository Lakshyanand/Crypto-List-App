import React from "react";
import { useEffect, useState } from "react";
import classes from './CryptoList.module.css';

const CryptoList = () => {

    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coinlore.net/api/tickers/');
                const data = await response.json();
                console.log(data.data);
                setCrypto(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <div className={`${classes['flex-container']}`}>
            <table className={classes.table}>
                <thead>
                    <th>
                        Symbol
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Price Used
                    </th>
                    <th>
                        Price Btc
                    </th>
                </thead>
                <tbody>
                    {crypto.map((item) => (
                        <tr>
                            <td>{item.symbol}</td>
                            <td>{item.name}</td>
                            <td>{item.price_usd}</td>
                            <td>{item.price_btc}</td>
                        </tr>
                    )

                    )}
                    {/* <tr>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                    </tr> */}
                    {/* <tr>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                        <td>fcvgh</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoList;