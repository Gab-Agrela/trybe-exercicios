import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchImage } from '../redux/actions'
import Loading from './Loading';


class Home extends Component {
  render () {
    const { loading, imagem, dispatch } = this.props;
    return (
      <div>
        {loading
        ? <Loading />
        : (
          <>
            <button type='button' onClick={() => dispatch(fetchImage()) }>Enviar</button>
            <img className='imagem' src={imagem} alt="dog_image" />
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.reducer.loading,
  imagem: state.reducer.img,
})

export default connect(mapStateToProps, null)(Home)