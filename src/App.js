
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRoute } from "./routes/AppRouter";
import 'animate.css';

function App() {
  

  return (
    <>
      <AuthProvider>
        <AppRoute />
      </AuthProvider>
    </>
  )
}

export default App
