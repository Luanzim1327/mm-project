import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Model, createServer } from 'miragejs';
import './index.css'

createServer({
  models: {
    transactions:Model,
  },

seeds(server) {
  server.db.loadData({
    transactions: [
      {
        id:1,
        title: "Landing Page",
        type:"deposit",
        category:"DEV",
        amount: 1500,
        createdAt: new Date('2023-07-15 13:00:00'), 
      },
      {
        id:2,
        title: "Manutenção de veiculo",
        type:"withdraw",
        category:"Manutenção",
        amount: 850,
        createdAt: new Date('2023-03-02 09:00:00'), 
      },
    ],
  })
},

  routes() {
    this.namespace = 'api';

    this.get("/transactions" , () => {
        return this.schema.all('transactions')
    })

    this.post("/transactions" , (schema , request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transactions' , data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
