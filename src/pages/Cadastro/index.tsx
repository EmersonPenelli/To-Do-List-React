const Cadastro = () => (
  <form>
    <input type="text" placeholder="Título" />
    <textarea placeholder="Descrição da tarefa" />
    <input type="radio" id="urgente" /> <label htmlFor="urgente">Urgente</label>
    <input type="radio" id="importante" />{' '}
    <label htmlFor="importante">Importante</label>
    <input type="radio" id="normal" /> <label htmlFor="normal">Normal</label>
    <button type="submit">Cadastrar</button>
  </form>
)

export default Cadastro
