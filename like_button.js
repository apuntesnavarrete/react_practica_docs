import {listado} from './componente'

function MyApp() {
  return <div>
  <h1>titulo</h1>
  <h2>subtitulo</h2>
  <listado></listado>
  </div>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);