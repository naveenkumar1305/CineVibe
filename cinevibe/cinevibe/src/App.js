import './App.css';
import { Header, Footer } from "./Components";
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="page-wrapper">
      <div className="main-content">
        <Header />
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
