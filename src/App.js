import Main from './components/Main';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Main />
      <Menu />
      <Projects />
    </div>
  );
}

export default App;
