import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar Typescript',
    descricao:
      'Estudar Typescript para melhorar o desenvolvimento de aplicações React',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Estudar Python',
    descricao:
      'Estudar Python para melhorar o desenvolvimento de aplicações Django',
    prioridade: 'Importante',
    status: 'Pendente'
  },
  {
    titulo: 'Estudar banco de dados',
    descricao:
      'Estudar banco de dados para melhorar a performance de consultas SQL',
    prioridade: 'Importante',
    status: 'Concluida'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 Tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
