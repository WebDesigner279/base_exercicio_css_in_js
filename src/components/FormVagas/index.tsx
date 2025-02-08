//  import { FormEvent, useState } from 'react'

//  import styles from './FormVagas.module.css'

//  type Props = {
//    aoPesquisar: (termo: string) => void
//  }

//  const FormVagas = ({ aoPesquisar }: Props) => {
//    const [termo, setTermo] = useState<string>('')

//    const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
//      e.preventDefault()
//      aoPesquisar(termo.toLocaleLowerCase())
//    }

//    return (
//      <form className={styles.form} onSubmit={aoEnviarForm}>
//        <input
//          className={styles.campo}
//          placeholder="Front-end, fullstack, node, design"
//          onChange={(e) => setTermo(e.target.value)}
//          type="search"
//        />
//        <button className={styles.btnPesquisar} type="submit">
//          Pesquisar
//        </button>
//      </form>
//    )
//  }
//  export default FormVagas

// novo styled-components
import styled from 'styled-components'
import { FormEvent, useState } from 'react'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const Input = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const Button = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  )
}

export default FormVagas
