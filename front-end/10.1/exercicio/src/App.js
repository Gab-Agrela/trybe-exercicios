import './App.css';
import Header from './Header.jsx'
import Content from './Content';
import Footer from './Footer';
function App() {
  return <Task/>;
}

const Task = () => {
  const skills = ["HTML","CSS","React","JavaScript"] // adicione mais habilidades aqui
  const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
  return (  
    <div>
      <h1>Gabriel Agrela Barbosa</h1>
      <h2>Minhas Skills</h2>
      <ul>{jsxSkills}</ul>
      <Header/>
      <div className='container'><Content/></div>
      <Footer/>
    </div>
  );
}
export default App;
