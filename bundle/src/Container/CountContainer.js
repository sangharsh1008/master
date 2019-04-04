import React from 'react';
import { connect } from 'react-redux';
import { Count } from './count.js'

export class CountContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log("inside count Container", this.props.countL);
        console.log("inside count Container", this.props.countR);
    }

    render() {

        return (
            <div>
                <Count countL={this.props.countL} countR={this.props.countR} />
            </div>

        )
    }


}



const mapStateToProps = (state) => {
    console.log("inside mapstateto props",state);
    return {
        countL: state.countReducer.countL,
        countR: state.countReducer.countR
    };
};

export default connect(mapStateToProps)(CountContainer);
