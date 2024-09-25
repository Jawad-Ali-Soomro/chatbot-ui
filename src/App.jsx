import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./auth/Login"


function App() {
  const loginToken = window.localStorage.getItem("authToken")

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={loginToken ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
