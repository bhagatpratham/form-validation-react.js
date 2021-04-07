import React from 'react';
import './App.css';
import ValidationForm from './components/formValidation';
// import Counter from './components/counter';
// import ImageSlider from './components/imageSlider';
// import Myform from './components/Myform';

export default class App extends React.Component {
  render() {
    return(
      <div>
        {/* <Myform />
        <Counter />
        <ImageSlider /> */}
        <ValidationForm />
      </div>
    );  
  }
  // state = {
  //   visible: true,
  //   whichComponentToShow: "ImageSlider"
  // };

  // render() {
  //   if(this.state.whichComponentToShow === "ImageSlider") {
  //     return (
  //       <div className="App">
  //         <ImageSlider />
  //         <button onClick={() => {
  //           this.setState({ whichComponentToShow: "Counter"});
  //         }}>Counter</button>
  //       </div>
  //     );
  //   } else if (this.state.whichComponentToShow === "Counter"){
  //     return(
  //       <div className="App">
  //         <Counter />
  //       </div>
  //     )
  //   }
  // }
}

class App2 extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}