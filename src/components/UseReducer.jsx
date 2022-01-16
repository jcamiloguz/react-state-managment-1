import React, { useEffect, useReducer } from 'react'

const SECURITY_CODE = 'dss'

function UseReducer ({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm })
  }
  const onError = () => {
    dispatch({ type: actionTypes.error })
  }
  const onWrite = ({ target: { value } }) => {
    dispatch({ type: actionTypes.write, payload: value })
  }
  const onCheck = () => {
    dispatch({ type: actionTypes.check })
  }
  const onDelete = () => {
    dispatch({ type: actionTypes.delete })
  }
  const onReset = () => {
    dispatch({ type: actionTypes.reset })
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

            <input type="text" placeholder='Codigo De Seguridad' value={state.value} onChange={onWrite } />

            <button
          onClick={onCheck}
          >Comprobar</button>
        </div>
    )
  } else if (state.confirmed && !state.deleted) {
    return (
        <>
            <p> Pedimos confirmacion, seguro?</p>
            <button onClick={onDelete}>Si, eliminar</button>
            <button onClick={onReset}>No</button>
        </>
    )
  } else {
    return (
        <>
            <p> Eliminado con exito</p>
            <button onClick={onReset}>Reset</button>

        </>
    )
  }
}

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false
}
const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  check: 'CHECK',
  write: 'WRITE',
  delete: 'DELETE',
  reset: 'RESET'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
    error: false
  },
  [actionTypes.confirm]: {
    ...state,
    loading: false,
    confirmed: true
  },
  [actionTypes.write]: {
    ...state,
    value: payload
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true
  },
  [actionTypes.reset]: {
    ...state,
    confirmed: false,
    deleted: false,
    value: ''
  }
})

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type]
  } else {
    return state
  }
}

export { UseReducer }
