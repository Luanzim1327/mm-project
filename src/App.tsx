import { useState } from "react";
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionsModal";
import { TransactionsProvider } from "./assets/TransactionsContext";

function App() {

  const [isOpenNewTransactionModal , setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal () {
      setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal () {
      setIsOpenNewTransactionModal(false);
  }

  return (
    <TransactionsProvider> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionsProvider>
  )
}

export default App
