import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesConfig from './RoutesConfig';

function App() {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar />
                <RoutesConfig />
            </div>
            <Footer />
        </>
    );
}

export default App;
