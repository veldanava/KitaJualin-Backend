import dotenv from 'dotenv';
dotenv.confifg();
const { MID_SERVER_KEY, MERCHANT_ID } = process.env;

const midtransClient = require('midtrans-client');

let snap = new midtransClient.Snap({
  isProduction : false,
  serverKey : process.env.MID_SERVER_KEY
});

// let parameter = {
//   "transaction_details": {
//     "order_id":
//   };
// };