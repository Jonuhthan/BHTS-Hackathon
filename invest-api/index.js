import react from 'react'
import { useState } from 'react'

const cors = require('cors');
app.use(cors());

app.use(express.json());

const getInvestUrl = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=IRJBI8Q6NR6EC2X1'
const [stockinfo, setStockInfo] = useState([]);

const GetInvestInfo = () => {

    fetch(getInvestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Authorization': 'IRJBI8Q6NR6EC2X1',
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(responseJSON => {
        setStockInfo(responseJSON.data)
    .catch(error => {
        console.error('Error:', error);
    });
   });
}
export default GetInvestInfo;