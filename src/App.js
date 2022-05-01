import CompanyRegistration from './components/CompanyRegistration';
import LoginForm from './components/LoginForm';
import { useUserDetailsState } from './reducers/userDetails.reducer';

function App() {
  const userDetailsState = useUserDetailsState();
  const { isLoggedIn } = userDetailsState;
  console.log("App -> isLoggedIn", isLoggedIn)
  return (
    <div className="App">
      {
        isLoggedIn ? <CompanyRegistration/>: <LoginForm/>
      }
      
    </div>
  );
}

export default App;
