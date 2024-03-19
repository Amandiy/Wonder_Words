
import './css/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Main_task from './components/Main_task';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { CheckUserExist } from './helper/helper';
// react routes
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main_task></Main_task>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist> 
  },
  {
    path : '/result',
    element :<CheckUserExist><Result/></CheckUserExist> 
  },
])
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
    
  );
}

export default App;
