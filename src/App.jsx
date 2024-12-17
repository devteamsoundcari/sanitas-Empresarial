import { SanitasEmpresarialProvider } from "./context";
import { SanitasEmpresarial } from "./page/SanitasEmpresarial";

function App() {
  return (
    <SanitasEmpresarialProvider>
      <SanitasEmpresarial />
    </SanitasEmpresarialProvider>
  );
}

export default App;
