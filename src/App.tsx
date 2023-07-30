import { useState } from "react";
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { NewTransactionModal } from "./components/NewTransactionsModal";

function App() {

  const [isOpenNewTransactionModal , setIsOpenNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal () {
      setIsOpenNewTransactionModal(true);
  }

  function handleCloseNewTransactionModal () {
      setIsOpenNewTransactionModal(false);
  }

  return (
    <> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal isOpen={isOpenNewTransactionModal} onRequestClose={handleCloseNewTransactionModal}/>
    </>
  )
}

export default App
