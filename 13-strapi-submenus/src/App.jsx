import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
      {/* <div style={{ height: '100vh', background: 'grey' }}></div>
      <div style={{ height: '100vh', background: '#e2e8f0' }}></div> */}
    </>
  );
};
export default App;
