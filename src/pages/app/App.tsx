import { Outlet } from 'react-router';
import Styles from './App.module.scss';


export function App() {

  return (
    <div className={Styles.wrapper}>
      <Outlet />
    </div>
  )
}



// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
