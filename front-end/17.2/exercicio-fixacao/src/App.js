import './App.css';
import Form from './components/Form';
import List from './components/List';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
