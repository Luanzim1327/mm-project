import { useState , useEffect , createContext , ReactNode } from "react";
import { api } from "../services/api";


interface TransactionProps {
    id: number;
    title : string;
    category : string;
    amount : number;
    type: string;
    createdAt : string;
}

type TransactionInput = Omit<TransactionProps , 'id' | 'createdAt'> 

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({children} : TransactionsProviderProps) {
    const [transactions , setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(res => {
            setTransactions(res.data.transactions)
        })
    } , [])

    async function createTransaction(transactionInput : TransactionInput) {
       const response = await api.post('/transactions' , {
            ...transactionInput ,
            createdAt: new Date(),
       });

       const transactionsCreated = response.data.transactions;

       setTransactions([
            ...transactions , 
            transactionsCreated
       ])
    }

    return (
        <TransactionsContext.Provider value={{transactions , createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}