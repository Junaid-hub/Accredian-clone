import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-slate-950">
        <ScrollProgressBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}

export default App;
