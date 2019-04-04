import React from 'react';

export class Button extends React.Component {
  constructor(props) {
      super(props);

  }

render(){
// console.log("inside Render of Button",this.props);
 // console.log(props.pos);
  return (
    <div>
      <button style={{ padding: '5px', margin: '5px' }} onClick={this.props.clickHandler}>{this.props.pos}</button>
     <div>
  
       
       </div> 
    </div>
  )
}}