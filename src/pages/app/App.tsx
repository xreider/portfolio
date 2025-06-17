import { Outlet } from 'react-router';
import Styles from './App.module.scss';
import { HiddenModeProvider } from '@src/app/config/contexts/HiddenModeContext';


export function App() {

  return (
    <HiddenModeProvider isHiddenMode={true}>
      <div className={Styles.wrapper}>
        <Outlet />
      </div>
    </HiddenModeProvider>
  )
}



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
