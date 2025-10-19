import Navi from './pages/Nav'
import Footer from './pages/Footer'
import { useState ,useEffect } from 'react'
import SplashMessage from './pages/Splashscreen'
import AnimatedContent from './component/AnimatedContent'
function App() {

   const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    },4500); 

    return () => clearTimeout(timer);
  }, []);

    if (isLoading) {
    return <SplashMessage />;
  }
  
  return(
    <>
    
    <div className='min-h-screen bg-white from-slate-50 via-blue-50 to-cyan-50'>
        <div className='navbar pt-safe'>
              <Navi/>
        </div>
        <AnimatedContent>
        <Footer />
        </AnimatedContent>
     
    </div>
    </>
  )
}

export default App;
