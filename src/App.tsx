import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
