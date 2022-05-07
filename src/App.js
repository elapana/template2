import Button from '@mui/material/Button';
import Header from"./components/header";
import { Grid } from '@mui/material';
import Navigation from './components/navigation';
import './App.css';
import Banner from './components/banner';
import Aboutus from './components/aboutus';
import Middle1 from './components/middle1';
import Aboutcompany from './components/aboutCompany';
import Embedded from './components/embedded';
import Succes from './components/succes';
import Services from './components/services';
import Signup from './components/signup';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
<Header/>
<Navigation/>
<Banner/>
<Aboutus/>
<Middle1/>
<Aboutcompany/>
<Embedded/>
<Succes/>
<Services/>
<Signup/>
<Footer/>
    </div>
  );
}

export default App;

