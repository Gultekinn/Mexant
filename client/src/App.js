import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './router/router';
import { useState } from 'react';
import { MainContext } from './Context/Context';

function App() {
  const router=createBrowserRouter(ROUTES)
  const [wishtlistItem,setWishlistItem]=useState([])
  const datas={
    wishtlistItem,
    setWishlistItem
  }
  return (
    <div className="App">
      <MainContext.Provider value={datas}>
        <RouterProvider router={router}/>

      </MainContext.Provider>
    </div>
  );
}

export default App;
