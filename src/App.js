import "./App.css";
import { Button } from "@mui/material";
import useDialog from "./useDialog";

function App() {
  const [abrirDialog, JDialog] = useDialog();

  console.log("Render de App");
  return (
    <div className="App">
      <Button onClick={abrirDialog}>Abrir Dialog</Button>
      <JDialog />
    </div>
  );
}

export default App;
