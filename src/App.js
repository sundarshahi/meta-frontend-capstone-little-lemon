
import {
  Route, 
  Routes
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';



import pages from './utils/pages';
function App() {
  return (
    <>
     <Layout>
     <Routes>
     <Route path={pages.get('home').path} element={<Home />} />
     <Route path={pages.get('bookings').path} element={<Bookings />} />
     </Routes>
      
      
    </Layout>
    </>
  );
}

export default App;
