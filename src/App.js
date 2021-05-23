import SidePanel from './Components/SidePanel'
import TopPanel from './Components/TopPanel'
import Tableu from './Components/Tableu'
import './sass/App.scss'

const App=()=> {
  return (
    <div className='app-main'>
    <div className='app-container-panel'>
    <SidePanel />
    <div className='app-container-tab'>
    <TopPanel />
    <Tableu />
    </div>
    </div>
    </div>
  );
}

export default App;
