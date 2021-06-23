import React from 'react'           // importado do package.jason, importante para o scopo
import ReactDOM from 'react-dom'    // importado do package.jason

//aula 2 import Primeiro from './componentes/Primeiro'

// aula 2 ReactDOM.render(<Primeiro/>, document.getElementById('root')) // conversa expecificamente com a página

import BomDia from './componentes/BomDia'

ReactDOM.render(<BomDia nome = "vitor"/>, document.getElementById('root'))