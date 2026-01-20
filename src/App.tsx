import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

export const App = () => (
  <div className="App">
    <Header />
    {/* Example usage of NotFoundPage, replace with router logic later */}
    {/* <Routes> ... <Route path="*" element={<NotFoundPage />} /> ... </Routes> */}
    <NotFoundPage />
    <Footer />
  </div>
);
