import { Component } from 'react'
import { Loading } from '../Loading'

const SECURITY_CODE = 'ds'

class ClassState extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      error: false,
      loading: false
    }
  }

  //   UNSAFE_componentWillMount () {
  //     console.log('will Mount')
  //   }

  //   componentDidMount () {
  //     console.log('Did Mount')
  //   }
  componentDidUpdate () {
    if (this.state.loading) {
      setTimeout(() => {
        // console.log('validacion')
        if (this.state.value !== SECURITY_CODE) {
          this.setState({ error: true })
        }
        this.setState({ loading: false })
        // console.log('terminando validacion')
      }, 2000)
    }
  }

  render () {
    return (
        <div>
            <h2>Eliminar {this.props.name}</h2>
            <p>Por favor, escribe el codigo de seguridad</p>

            {this.state.error && (<p>Error, el codigo es incorrecto</p>)}

            {this.state.loading && (<Loading/>)}

            <input type="text" placeholder='Codigo De Seguridad' value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })}/>

            <button
          onClick={() => this.setState({ error: false, loading: true })}
          >Comprobar</button>
        </div>
    )
  }
}

export { ClassState }
