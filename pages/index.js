import "../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./components/Header";
import Homepage from "./components/Homepage"; 
import Footer from "./components/Footer";

export default function App() { 
  return (
    <>
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>
      <Homepage /> 
      <Footer />
    </>
  );
}
