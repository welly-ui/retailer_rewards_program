import React from 'react';

import { pointCal } from '../Modules/utilities';

const ShowTable = (props) => {
  const { tableHeader, tableData } = props;

  const renderTableHeader = () => {
    return tableHeader.map((row, index) => {
      return (
        <th key={index}>{row.toUpperCase()}</th>
      )
   })
  }

  const renderTableData = () => {
    return tableData.map((row, index) => {
       const { date, items, spent } = row;
       return (
          <tr key={index}>
             <td>{date}</td>
             <td>{items.join(', ')}</td>
             <td>{'$' + spent}</td>
             <td>{pointCal(spent)}</td>
          </tr>
       )
    })
  }

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
}

export default ShowTable;