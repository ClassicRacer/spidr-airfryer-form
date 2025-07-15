import { createRoot } from 'react-dom/client'
import './styles/index.css'
import InterestForm from './components/InterestForm.jsx'

createRoot(document.getElementById('root')).render(<InterestForm />);

export { InterestForm };