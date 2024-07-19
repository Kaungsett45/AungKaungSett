import Navi from './pages/Nav'

import Footer from './pages/Footer'
import SplashScreen from './pages/Splashscreen'

function App() {

 
  return(
    <>
        <div className='navbar'>
              <Navi/>
        </div>
       
        <Footer />
        
        </>
      )
}

export default SplashScreen(App);
