import Starting from './pages/Starting';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="bg-[#0077B6] h-screen">
      <Navbar/>
      <Starting/>
      <Footer/>
    </div>
  );
}

export default App;
