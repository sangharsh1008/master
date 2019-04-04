import React from 'react';
import { ONSELECT, SHIFTPROCESS, COUNTERCHANGE } from './actionTypes';
import { connect } from 'react-redux';
import TableContainer from './tableComponent.js'
import ButtonContainer from './ButtonContainer'
import { Count } from './count.js'
import Container from './CountContainer';
import { bindActionCreators } from 'redux'
import * as TodoActionCreators from './TodoActionCreators'


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    console.log("inside app", this.props);
    const { dispatch } = this.props;
    this.boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)
  }
  componentDidMount() {
   let { dispatch } = this.props

    let action = TodoActionCreators.CounterChange({
      countL: this.props.leftRows.length,
      countR: this.props.rightRows.length
    });
    dispatch(action)

  }
  render() {
    let { buttoncontainer } = this.props;
    return (
      <div>
        <div>
	<TableContainer pos='leftRows'{...this.boundActionCreators}/>
  	<TableContainer pos='rightRows'{...this.boundActionCreators}/>

 <ButtonContainer pos='leftRows'{...this.boundActionCreators}/> 
 <ButtonContainer pos='rightRows'{...this.boundActionCreators}/> 
        </div>
	
        <div>
          <Container />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    leftRows: state.dataReducer.leftRows,
    rightRows: state.dataReducer.rightRows,
    
  };
};


export default connect(mapStateToProps)(App);
