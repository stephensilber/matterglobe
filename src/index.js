import { render } from 'react-dom'
import { Stats } from '@react-three/drei'
import './style.css'
import App from './App'

render(
  <>
    <App />
    <Stats />
  </>,
  document.getElementById('root'),
)
