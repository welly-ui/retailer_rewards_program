import React from 'react';

import ShowTable from '../components/table';
import tableMockData from '../data/mockData.json';

import { pointCal } from '../Modules/utilities';

class Landing extends React.Component {

  cumulativePerMonth = () => {
    const { tableData } = tableMockData;
    let pointsMonth = new Map();

    tableData.map((row, index) => {
      const { date, spent } = row;

      const fullDate = new Date(date);
      const month = fullDate.getMonth() + 1;

      const pointsEarned = pointCal(spent);

      if(pointsMonth.has(month)) {
        const existingValue = pointsMonth.get(month);
        const newValue = existingValue + pointsEarned;

        pointsMonth.set(month, newValue);
      } else {
        pointsMonth.set(month, pointsEarned);
      }

      return pointsMonth
   })

   return pointsMonth
  }

  generateMonthlyTable = (pointPerMonthData) => {
    const convertedObj = Object.fromEntries(pointPerMonthData);
    const objKeys = Object.keys(convertedObj);

    return objKeys.map((ele, inx) => {
      return (
        <tr key={inx}>
          <td>{ele}</td>
          <td>{convertedObj[ele]}</td>
        </tr>
      )
    })

  }

  render() {
    const { tableHeader, tableData } = tableMockData;

    const pointPerMonthData = this.cumulativePerMonth(tableData);
    return (
      <div>
        <div>
          <h1 className='title'>Recent Transactions</h1>
          <ShowTable tableHeader={tableHeader} tableData={tableData}/>
        </div>
        <div>
          <h1 className='title'>Points Each Month</h1>
          <table className="table">
            <tbody>
              <tr>
                <th>Month</th>
                <th>Points</th>
              </tr>
              {this.generateMonthlyTable(pointPerMonthData)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Landing;