import React from 'react';
import { Table } from './table.js'
import { connect } from 'react-redux';

class TableContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelect(event) {
        const index = Number(event.target.getAttribute('data-id'));
        const position = event.target.getAttribute('data-position');
        const value = event.target.checked;
        const tempArr = this.props[position].map((element, i) => {
            if (index === i) {
                element.selected = value
            }
            return element;
        });

        this.props.onSelect({
            [position]: tempArr,
            position
        });
    }
    render() {
        return (
            <div>
                <Table rowData={this.props[this.props.pos]} pos={this.props.pos} onSelect={this.onSelect.bind(this)} />
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

export default connect(mapStateToProps)(TableContainer);




