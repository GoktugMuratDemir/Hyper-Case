import './App.css'
import FirstPage from './Layouts/Page_First/Main'
import SecondPage from './Layouts/Page_Second/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
