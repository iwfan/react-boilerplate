import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppRoutes />
    </ErrorBoundary>
  );
}

export default App;
