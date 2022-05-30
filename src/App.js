import React, {useState} from 'react';
import './index.css'
import NavBar from './components/NavBar';
import { Results } from './components/Results';
import { AppRoutes } from './components/AppRoutes';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-gray-200 min-h-screen px-5 dark:bg-gray-800 '>

        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <AppRoutes/>
        
      </div>
      
    </div>
  );
}

export default App;
