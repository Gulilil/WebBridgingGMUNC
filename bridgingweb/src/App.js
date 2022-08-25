import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RoutesConfig from './RoutesConfig';
import HomePage from './components/pages/HomePage';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <RoutesConfig />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
