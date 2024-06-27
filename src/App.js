import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import User from './component/User';
import UserProfile from './component/UserProfile';


  
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <UserProfile /> */}
            {/* <Welcome /> */}
            <User />
            
          </header>
        </div>
      );
    }
  export default App;
 
 
 


