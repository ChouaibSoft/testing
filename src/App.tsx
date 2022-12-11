import { Snackbar } from "@mui/material";
import Locales from "locales";
import Home from "pages/home";
import RTLLayout from "./components/layout/utils/RTLLayout";
import bg from 'assets/bg.jpg'


function App() {
  return (
    <RTLLayout>
      <Locales>
        <Home></Home>
        <img className='app__bg' src={bg} alt="background image" />
        <div className='app__overlay'></div>
        <Snackbar />
      </Locales>
    </RTLLayout>
  );
}

export default App;
