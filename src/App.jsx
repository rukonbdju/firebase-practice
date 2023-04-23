import { RouterProvider } from "react-router-dom"
import router from "./router/MainRoute"

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
