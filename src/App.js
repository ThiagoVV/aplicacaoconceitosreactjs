// import React from "react";
// // import Button from './Button'

// const buttonA = <button>Histórico dos Clientes</button>
// const buttonB = <button>Cadastro Cliente(s)</button>

// const hasCostumer = true
// const costumer = 'Thiago Veiga'

// const App = () => {

//   const renderShowHistory = () => (
//     <div>
//       Clique no botão abaixo para ver o histórico dos Clientes
//       <br />
//       {buttonA}
//     </div>
//   )

//   const renderAddCostumer = () => (
//     <div>
//       Clique no botão abaixo para ver o histórico dos Clientes
//       <br />
//       {buttonB}
//     </div> 
//   )

//   const showCostumer = () => {

//     if (!hasCostumer) return null
//     // Não é uma boa prática utilizar dois retornos no mesmo const
//     return (
//       <div>
//         <h1>Nome do Cliente: {costumer}</h1>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <p>Digital Innovation One</p>
//       <p>Bem vindo a nossa aula =D.</p>
//       <br />
//       {hasCostumer ? renderShowHistory() : renderAddCostumer()}
//       {showCostumer()}
//       {/* <div>Webpack 4</div>
//       <Button /> */}  
//     </div>
//   );
// };
// export default App;

// --------------------------------------------------------------------------- LISTAS E CHAVES REACTJS

import React from "react";
import Button from '../components/Button';
import mock from '../components/mock';

const App = () => {

  const handleClick = (id) => {
    console.log('deletar cliente')
    alert(`ID do cliente: ${id}`)
  }

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}  <Button onClick={() => handleClick(customer.id)}>Deletar o Cliente </Button></li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {mock.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;


// ------------------------------------------------------------------------------- MANIPULANDO EVENTOS

// import React from 'react';


// const App = () => {
  
//   const name = 'Thiago Vinicius Veiga'
  
//   const handleChange = (e) => {
//     const {value} = e.target
//     console.log(value)
//   }
  
//   const showEvent = (e) => {
//     console.log('Evento clicado')
//     console.log(e)
//     alert(name)
//   }

//   const Button = <button onClick={showEvent}>Mostrar Evento</button>
  
//   return (
//     <div>
//       <p>Digital Innovation One</p>
//       <p>Bem-vindo a nossa aula!</p>
//       <input onChange={handleChange}/>
//       {Button}
//     </div>
//   )
// }

// export default App;