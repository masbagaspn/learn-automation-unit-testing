import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { Application } from './components/application/application';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Application />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
