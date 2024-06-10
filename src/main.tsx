import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/reset.css';
import './assets/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);
