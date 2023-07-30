import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable () {
    useEffect(() => {
        api.get('transactions')
        .then(res => console.log(res.data))
    } , [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Manutenção de veiculo</td>
                        <td className="withdraw">- R$ 500.00</td>
                        <td>Manutenção</td>
                        <td>27/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}