import { FormEvent, useState , useContext } from "react";
import Modal from "react-modal";
import { Container , TransactionTypeCategory  , RadioBox} from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outocomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../hooks/useTransactions";

interface NewTransactionModalProps {
    isOpen :boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal ({isOpen , onRequestClose} : NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    const [title , setTitle] = useState('');
    const [category , setCategory] = useState('');
    const [amount , setAmount] = useState(0);
    const [type , setType] = useState('deposit');


    async function handleCreateNewTransaction (event : FormEvent) {
        event.preventDefault();
        
        await createTransaction({
            title,
            category,
            amount,
            type,
        })

        onRequestClose();
        setTitle('');
        setCategory('');
        setType('deposit');
        setAmount(0);
    }


    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName={"react-modal-overlay"}
        className={"react-modal-content"}
        >
            <button className="react-modal-close" onClick={onRequestClose}>
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => {setTitle(event.target.value)}}

                />
                <input 
                    placeholder="Catégorias"
                    value={category}
                    onChange={(event) => {setCategory(event.target.value)}}
                />

                <TransactionTypeCategory>
                    <RadioBox 
                        onClick={() => {setType('deposit')}} 
                        type="button"
                        isActive={type === "deposit"}
                        activeColor={"green"}
                    >
                        <img src={incomeImg} alt="Entradas"/>
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox 
                        onClick={() => {setType('withdraw')}}
                        type="button"
                        isActive={type === "withdraw"}
                        activeColor={"red"}
                    >
                        <img src={outocomeImg} alt="Saidas"/>
                        <span>Saidas</span>
                    </RadioBox>
                </TransactionTypeCategory>

                <input 
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) => {setAmount(Number(event.target.value))}}
                />
                <button 
                    type="submit"
                >
                    Cadastrar
                </button>
            </Container>
      </Modal>
    )
}