import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </>,
)
