import "./App.css"
import { MainRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <MainRoutes />
    </>
  )
}

export default App