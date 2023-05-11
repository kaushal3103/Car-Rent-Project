import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Details from './components/details';
import Bookform from './components/bookform';
const App =()=>(
    <Router>
        <Routes>
            <Route path ="/" element={<Dashboard/>} />
            <Route path="/details/:id" element={<Details/>} />
            <Route path="/bookform/:id" element={<Bookform/>} />
        </Routes>
    </Router>
   
)

export default App;
