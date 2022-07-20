import React from "react";

class Content extends React.Component {
    render () {
        const conteudos = [
            {
              conteudo: 'High Order Functions',
              bloco: 8,
              status: 'Aprendido'
            },
            {
              conteudo: 'Composicao de Componentes',
              bloco: 11,
              status: 'Aprendendo',
            },
            {
              conteudo: 'Composicao de Estados',
              bloco: 12,
              status: 'Aprenderei'
            },
            {
              conteudo: 'Redux',
              bloco: 16,
              status: 'Aprenderei'
            },
          ];
        const conteudoFormatado = conteudos.map((d) => {
            const obj ={
                1:d.conteudo,
                2:d.status,
                3:d.bloco,
            }
            return obj
        })
        return conteudoFormatado.map((d) => {
            return <div className="content">
                O conteudo é: {d[1]} ,
                Status: {d[2]},
                Bloco: {d[3]}
            </div>
        })
    }
}

export default Content