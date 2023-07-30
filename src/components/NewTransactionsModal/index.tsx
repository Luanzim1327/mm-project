import Modal from "react-modal";
import { Container , TransactionTypeCategory  , RadioBox} from "./styles";


import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outocomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen :boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal ({isOpen , onRequestClose} : NewTransactionModalProps) {

    const [type , setType] = useState('deposit');

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
            <Container>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Titulo"

                />
                <input 
                    placeholder="Catégorias"

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

                />
                <button type="submit">Cadastrar</button>
            </Container>
      </Modal>
    )
}