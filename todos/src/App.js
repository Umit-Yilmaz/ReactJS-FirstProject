import Header from './components/header/index.js';
import Content from './components/content/index.js'
import ContentFooter from './components/contentFooter.js';
import { ToDoProvider } from './context/ToDoContext.js';

function App() {
  return (
    
    
    <section className="todoapp">
      
      <Content />
      <ContentFooter/>
    </section>
    
  );

}

export default App;
