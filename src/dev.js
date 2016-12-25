import './dev.scss';
import ReactPhotoswipe from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-react-photoswipe">
        <ReactPhotoswipe />
    </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
