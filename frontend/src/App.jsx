import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import './index.css'
import Header from "./components/Header"
import { useSelector } from "react-redux"
import Loader from "./components/Loader"

function App() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <>
      <Router>      
        <Header />
        {isLoading && <Loader/>}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
