import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import { Counter } from './components/counter/Counter';
import { Application } from './components/application/Application';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Application />} />
      <Route path="/counter" element={<Counter />} />
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
