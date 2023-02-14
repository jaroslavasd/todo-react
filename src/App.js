import './css/App.css';
import { UsernameForm } from './comp/UsernameForm';
import { Header } from './comp/Header';

export default function App() {
  return (
    <div className="App">
      <Header />
      <UsernameForm />
    </div>
  );
}
