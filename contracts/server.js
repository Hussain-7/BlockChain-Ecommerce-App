const Koa = require("koa");
const Router = require("@koa/router");
const cors = require("@koa/cors");
const ethers = require("ethers");
const PaymentProcessor = require("../build/contracts/PaymentProcessor.json");
const { Payment } = require("./db.js");
require("dotenv").config();

const app = new Koa();
const router = new Router();

const items = {
  '1': { id: 1, url: "http://UrlToDownloadItem1" },
  '2': { id: 2 ,url:"http://UrlToDownloadItem2"}
}

router.get("/api/getPaymentId/:itemId", async (ctx) => {
  const paymentId = (Math.random() * 1000).toFixed(0);
  await Payment.create({
    id: paymentId,
    itemId: ctx.params.itemId,
    paid:false
  })
  ctx.body = "hello World";
});

router.get('/api/getItemUrl/:paymentId', async ctx => { 
  const payment = await Payment.findOne({ id: ctx.params.paymentId });
  if (payment && payment.paid === true) { 
    ctx.body = {
      url:items[payment.itemId].url
    }
  } else
  {
    ctx.body = {
      url: ''
    };
  }
})


app.use(cors()).use(router.routes()).use(router.allowedMethods());



app.listen(4000, () => {
  console.log("Server Running on port 4000");
});


const listenToEvents = () => { 
  const provider = new ethers.providers.jsonRpcProvider('http://localhost:9545');
  const networkId='5777'
}