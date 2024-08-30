import Navi from './pages/Nav'

import Footer from './pages/Footer'
import SplashScreen from './pages/Splashscreen'
import AnimatedContent from './component/AnimatedContent'
function App() {

 
  return(
    <>
        <div className='navbar pt-safe'>
              <Navi/>
        </div>
        <AnimatedContent>
        <Footer />
        </AnimatedContent>
        
        </>
      )
}

export default SplashScreen(App);
