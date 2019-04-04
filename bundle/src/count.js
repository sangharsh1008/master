import React from 'react';

export class Count extends React.Component {
  constructor(props) {
      super(props);
    console.log("inside Count",this.props);
   }

render(){
// console.log("inside Render of Button",this.props);
 // console.log(props.pos);
  return (
    <div>
     <div>
    <span >Left counter ={this.props.countL}</span>
    <br></br>
    <span>Right counter ={this.props.countR}</span>
    </div> 
    </div>
  )
}}