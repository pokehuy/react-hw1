import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CounterPage from "./pages/CounterPage/CounterPage";
import CheckboxPage from "./pages/CheckboxPage/CheckboxPage";
import {useState} from 'react';

const OPTIONS = {
  WELCOME : "welcome",
  COUNTER : "counter",
  CHECKBOX : "checkbox"
}

const App = () => {
  const [selectedPage, setPageSelected] = useState(OPTIONS.WELCOME);
  const handleChange = (evt) => {
    setPageSelected(evt.target.value);
  }
  return (
    <div>
      <select onChange={handleChange}>
        <option value={OPTIONS.WELCOME}>Welcome</option>
        <option value={OPTIONS.COUNTER}>Counter</option>
        <option value={OPTIONS.CHECKBOX}>Checkbox</option>
      </select><br/>
      Option selected: {selectedPage}
      { selectedPage === OPTIONS.WELCOME && <WelcomePage/> }
      { selectedPage === OPTIONS.COUNTER && <CounterPage/> }
      { selectedPage === OPTIONS.CHECKBOX && <CheckboxPage/> }
    </div>
  );
}

export default App;
