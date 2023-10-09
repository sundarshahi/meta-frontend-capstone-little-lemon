
import {
  Route, 
  Routes
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home';



import pages from './utils/pages';
function App() {
  return (
    <>
     <Layout>
     <Routes>
     <Route path={pages.get('home').path} element={<Home />} />
     </Routes>
      
      
    </Layout>
    </>
  );
}

export default App;
