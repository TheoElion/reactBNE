import React from 'react'
import '../Home.css'

const Sobre = () => {
return (
    <div className='grid'>
        <div className='conteudo'>
            <h2>Sobre o projeto:</h2>
            <p>
                O Projeto Reports BNE é um software voltado para a área de atendimento que tem como objetivo automatizar e auxiliar na pesquisa de planos 
                cancelados do BNE (Banco Nacional de Empregos).Principais tecnologias utilizadas no projeto:
            </p>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    JAVASCRIPT
                </li>
                <li>
                    DATATABLES
                </li>
                <li>
                    BOOTSTRAP 5
                </li>
                <li>
                    C#
                </li>
                <li>
                    ASP.NET
                </li>
                <li>
                    Arquitetura MVC
                </li>
                <li>
                    SQL SERVER
                </li>
            </ul>
            <h3>Gerenciamento de planos</h3>
            <p>
                O Projeto Reports BNE possui um sistema de planos cancelados do BNE, onde é possível listar os planos cancelados, pesquisar e filtrar. O processo de filtragem é 
                realizado por meio de uma biblioteca chamada datatables que permite uma várias tipos de filtragem apenas usando o html e javascript, não sendo necessário
                fazer essa filtrarem pelo o backend.
            </p>      
        </div>
    </div>
)
}

export default Sobre