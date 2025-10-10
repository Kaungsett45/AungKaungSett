import Navi from './pages/Nav'
import Footer from './pages/Footer'
import SplashScreen from './pages/Splashscreen'
import AnimatedContent from './component/AnimatedContent'
function App() {
  return(
    <div className='min-h-screen bg-white from-slate-50 via-blue-50 to-cyan-50'>
        <div className='navbar pt-safe'>
              <Navi/>
        </div>
        <AnimatedContent>
        <Footer />
        </AnimatedContent>
    </div>
  )
}

export default App;
