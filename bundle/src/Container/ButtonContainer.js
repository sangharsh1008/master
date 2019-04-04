import React from 'react';
import { Button } from './Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as TodoActionCreators from './TodoActionCreators'

export class ButtonContainer extends React.Component {
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
        this.props.rowData.leftRows.forEach(element => {
          if (element.selected) {
            element.selected = false;
            this.props.rowData.rightRows.push(element);
          }
          else {
            _1sttemp.push(element);
          }
        });


        this.props.shiftProcess({
          leftRows: _1sttemp,
          rightRows: this.props.rowData.rightRows

        });
        console.log("Button click leftrow", Number(this.props.countL), "rightRow", this.props.countR, _1sttemp.length, this.props.rowData.leftRows.length)

        this.props.CounterChange({
          countL: _1sttemp.length,
          countR: this.props.rowData.rightRows.length
        });
        break;


      case 'rightRows':
        this.props.rowData.rightRows.forEach(element => {
          if (element.selected) {
            element.selected = false;
            this.props.rowData.leftRows.push(element);
          }
          else {
            _1sttemp.push(element);
          }
        });
        console.log("length of left rows", this.props.rowData.leftRows.length);
        console.log("length of left rows", this.props.rowData.rightRows.length);
        // console.log(_1sttemp);

        this.props.shiftProcess({
          leftRows: this.props.rowData.leftRows,
          rightRows: _1sttemp,

        });
        console.log("Button click leftrow", this.props.countL, "rightRow", this.props.countR, _1sttemp.length, this.props.rowData.leftRows.length)
        this.props.CounterChange({
          countL: this.props.rowData.leftRows.length,
          countR: _1sttemp.length
        });
        break;

    }
  }
  render() {

    return (
      <div>
        <Button rowData={this.props.rowData} clickHandler={this.clickHandler.bind(this)} pos={this.props.pos} />


      </div>

    )
  }


}



// const mapStateToProps = (state) => {
//   return {
//     leftRows: state.dataReducer.leftRows,
//     rightRows: state.dataReducer.rightRows,
//     countL: state.countReducer.countL,
//     countR: state.countReducer.countR
//   };
// };
// const mapDispatchToprops = (dispatch) => {
//   return {
//     onSelect: (_obj) => {
//       dispatch({
//         type: ONSELECT,
//         payload: _obj
//       });
//     },
//     shiftProcess: (_obj) => {
//       dispatch({
//         type: SHIFTPROCESS,
//         payload: _obj
//       });
//     },
//     CounterChange: (_obj) => {
//       dispatch({
//         type: COUNTERCHANGE,
//         payload: _obj
//       })
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToprops)(ButtonContainer);
