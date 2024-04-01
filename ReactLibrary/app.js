
// **Part 2 REACT 2**//
// const container = document.getElementById('react-container');

// ReactDOM.render("Hello! Welcome to React", container);



// **Part 2 REACT 3**   function component//
// const container = document.getElementById('react-container');
// const Container = () =>{
//     return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
//        React.createElement(`div`,null,`Let's rock and roll`)
//        );
// }
// // Render the Container
// ReactDOM.render(React.createElement(Container),container);


// **Part 2 REACT 4** class component//

class ReactContainer extends React.Component{
    // constructor - to initialize the state 
  
    // render method to render the react dom 
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with classes`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);



