import React from "react";
class Estrutura extends React.Component {
    render() {
        return (
            <><header>
                <h1>Pokedex</h1>
            </header>
            <div>
                <input type="text" id="search" placeholder="Insira o nome do Pokemon" />
            </div></>
        )
    }
}

export default Estrutura;
