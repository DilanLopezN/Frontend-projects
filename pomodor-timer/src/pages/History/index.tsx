import { HistoryContainer, HistoryList } from './styles'
export function History() {
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
