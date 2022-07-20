import React from "react";

class Pokemon extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} alt="" />
                <p>Nome: {this.props.name}</p>
                <p>Tipo: {this.props.type}</p>
                <p>Peso: {this.props.weigth}</p>
            </div>
        )
    }
}

export default Pokemon