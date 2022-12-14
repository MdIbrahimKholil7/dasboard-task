import React, { Suspense } from "react";
import './App.css'
import loader from './assets/829.gif'
function App() {
  const Home = React.lazy(() => import('./components/Home/Home'));
  return (
    <div className="App">
      <Suspense
        fallback={<div
          className='flex justify-center items-center
          h-[100vh]
          '
        >
          <img className='w-[100px]' src={loader} alt='loader' />
        </div>}
      >
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
