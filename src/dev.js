import './dev.scss';
import ReactPhotoswipe from './main';

/*===example start===*/

// install: npm install afeiship/react-photoswipe --save
// import : import ReactPhotoswipe from 'react-photoswipe'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-photoswipe">
        <ReactPhotoswipe ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
