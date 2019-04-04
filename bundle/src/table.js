import React from 'react';

export const Table =(props)=>{

    // console.log("inside Display",_position)
    const tempArr = props.rowData.map((value, index) => {
      return (
        <div key={index} style={{ display: 'table-row' }}>
          <div style={{ display: 'table-cell', border: '1px solid', padding: '5px' }}>
            <input type='checkbox' checked={value.selected} data-position={props.pos} data-id={index} onChange={props.onSelect} />
          </div>
          <div style={{ display: 'table-cell', border: '1px solid', padding: '5px' }}>
            {value.id}
          </div>
          <div style={{ display: 'table-cell', border: '1px solid', padding: '5px' }}>
            {value.name}
          </div>
        </div>
      )
    });
    return (
      <div style={{ display: 'table', border: '1px solid', margin: '10px' }}>
        {tempArr}
      </div>
    )
  }