import react from 'react'
import { useState } from 'react'

const cors = require('cors');
app.use(cors());

app.use(express.json());

const apiKey = 'IRJBI8Q6NR6EC2X1'
const getInvestUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=IRJBI8Q6NR6EC2X1'
const [stockInfo, setStockInfo] = useState([]);

const GetInvestInfo = () => {

    fetch(getInvestUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(responseJSON => {
        setStockInfo(responseJSON.data)
        console.log(stockInfo)
    .catch(error => {
        console.error('Error:', error);
    });
   });
}
export default GetInvestInfo;