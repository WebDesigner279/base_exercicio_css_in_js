// import styles from './Cabecalho.module.css'

// const Cabecalho = () => (
//   <header className={styles.cabecalho}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

// export default Cabecalho

import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const CabecalhoComponent = () => (
  <Cabecalho>
    <h1>EBAC Jobs</h1>
  </Cabecalho>
)

export default CabecalhoComponent
