import React from 'react';
import { Button } from './Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActionCreators from './TodoActionCreators'

class ButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside buttoncontainer", this.props);
  }

  clickHandler() {
    // console.log("inside button click", this.props.rowData);
    // console.log("length of left rows", this.props.CountL);
    console.log("length of left rows", this.props);

    let _1sttemp = [];
    let _2ndtemp = [];
    const _position = this.props.pos;

    switch (_position) {
      case 'leftRows':
        console.log("length of left rows", this.props);
        this.props.leftRows.forEach(element => {
          if (element.selected) {
            element.selected = false;
            this.props.rightRows.push(element);
          }
          else {
            _1sttemp.push(element);
          }
        });
        this.props.shiftProcess({
          leftRows: _1sttemp,
          rightRows: this.props.rightRows
        });
        this.props.CounterChange({
          countL: _1sttemp.length,
          countR: this.props.rightRows.length
        });
        break;
      case 'rightRows':
        this.props.rightRows.forEach(element => {
          if (element.selected) {
            element.selected = false;
            this.props.leftRows.push(element);
          }
          else {
            _1sttemp.push(element);
          }
        });
        console.log("length of left rows", this.props.leftRows.length);
        console.log("length of left rows", this.props.rightRows.length);
        // console.log(_1sttemp);

        this.props.shiftProcess({
          leftRows: this.props.leftRows,
          rightRows: _1sttemp,

        });
        console.log("Button click leftrow", this.props.countL, "rightRow", this.props.countR, _1sttemp.length, this.props.leftRows.length)
        this.props.CounterChange({
          countL: this.props.leftRows.length,
          countR: _1sttemp.length
        });
        break;
    }
  }
  render() {
    return (
      <div>
        <Button rowData={this.props[this.props.pos]} clickHandler={this.clickHandler.bind(this)} pos={this.props.pos} />
      </div>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    leftRows: state.dataReducer.leftRows,
    rightRows: state.dataReducer.rightRows,
    countL: state.countReducer.countL,
    countR: state.countReducer.countR
  };
};

export default connect(mapStateToProps)(ButtonContainer);
