import React, { useEffect, useState } from 'react'

const SECURITY_CODE = 'ds'

function UseState ({ name }) {
  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
  })
  const onConfirm = () => {
    setState({ ...state, loading: false, confirmed: true })
  }
  const onError = () => {
    setState({ ...state, error: true, loading: false })
  }
  const onWrite = (newValue) => {
    setState({ ...state, value: newValue })
  }
  const onCheck = () => {
    setState({ ...state, loading: true, error: false })
  }
  const onDelete = () => {
    setState({ ...state, deleted: true })
  }
  const onReset = () => {
    setState({ ...state, confirmed: false, deleted: false, value: '' })
  }

  useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError()
        } else {
          onConfirm()
        }
      }, 2000)
    }
  }, [state.loading])

  if (!state.confirmed && !state.deleted) {
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad</p>

            {state.error && (<p>Error, el codigo es incorrecto</p>)}

            {state.loading && (<p>Cargando...</p>)}

            <input type="text" placeholder='Codigo De Seguridad' value={state.value} onChange={(event) => onWrite(event.target.value)} />

            <button
          onClick={() => onCheck()}
          >Comprobar</button>
        </div>
    )
  } else if (state.confirmed && !state.deleted) {
    return (
        <>
            <p> Pedimos confirmacion, seguro?</p>
            <button onClick={() => onDelete()}>Si, eliminar</button>
            <button onClick={() => onReset()}>No</button>
        </>
    )
  } else {
    return (
        <>
            <p> Eliminado con exito</p>
            <button onClick={() => onReset() }>Reset</button>

        </>
    )
  }
}

export { UseState }
