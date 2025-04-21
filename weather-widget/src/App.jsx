import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

function App() {
  function buttonclk() {
    console.log("Button was clicked");
  }
  return (
    <>
      <h1>Demo of Material UI</h1>
      <Button variant="contained" onClick={buttonclk} startIcon={<DeleteIcon />}>
        delete
      </Button>
      <Alert severity="info">Delete option is given.</Alert>
    </>
  );
}

export default App;
