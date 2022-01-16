import './App.css'
import { ClassState } from './components/ClassState'
import { UseReducer } from './components/UseReducer'
import { UseState } from './components/UseState'

function App () {
  return (
      <div className="App">
          <UseState name="UseState"/>
          <ClassState name="ClassState"/>
          <UseReducer name="UseReducer"/>
      </div>
  )
}

export { App }
