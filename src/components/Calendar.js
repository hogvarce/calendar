import React from 'react';
import DateExtend from '../utils/DateExtend';
import '../styles/components/Calendar.css';

class Calendar extends React.Component {
    render() {
        let {date, year, month, selectDay = 0} = this.props;
        let matrix = DateExtend.getMatrix(year, month);
        return (
            <div className="calendar col-sm-6">
                <table>
                    <thead>
                    <tr>
                        <th>пн</th>
                        <th>вт</th>
                        <th>ср</th>
                        <th>чт</th>
                        <th>пт</th>
                        <th>сб</th>
                        <th>вс</th>
                    </tr>
                    </thead>
                    <tbody>
                    {matrix.map((week, w) => {
                        return (
                            <tr key={w}>
                                { week.map((day, i) => {
                                    if (day === 0)  return <td className="day day_unactive" key={i}>{""}</td>;
                                    if (day < 0) return <td className="day day_unactive" key={i}>{-(day)}</td>;
                                    return <td
                                        className={(selectDay + 1 === day) ? "day day_active" : (day === date) ? "day day_curr" : "day"}
                                        key={i}
                                        onClick={this.props.onSelectDay.bind(this, day)}>{day}</td>
                                }) }
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Calendar;

