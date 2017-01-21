import React from 'react';
import DateExtend from '../utils/DateExtend';
import Calendar from './Calendar';
import Notes from './Notes';

class CalendarContainer extends React.Component {
    constructor() {
        super();
        this.currentDate = new Date();
        this.state = {
            date: this.currentDate.getDate(),
            month: this.currentDate.getMonth(),
            year: this.currentDate.getFullYear(),
            notes: [],
            activeNote: "",
            selectDay: -1
        };
    }

    onNextMounth = () => {
        this.currentDate = (this.state.month < 11) ? new Date(this.state.year, this.state.month + 1) : new Date(this.state.year + 1, 0);
        this.setState({
            date: this.currentDate.getDate(),
            month: this.currentDate.getMonth(),
            year: this.currentDate.getFullYear(),
            notes: [],
            activeNote: "",
            selectDay: -1
        });
    };

    onPrevMounth = () => {
        this.currentDate = (this.state.month > 0) ? new Date(this.state.year, this.state.month - 1) : new Date(this.state.year - 1, 11);
        this.setState({
            date: this.currentDate.getDate(),
            month: this.currentDate.getMonth(),
            year: this.currentDate.getFullYear(),
            notes: [],
            activeNote: "",
            selectDay: -1
        });
    };

    onAppendNote = () => {
        this.setState({
            notes: [...this.state.notes.map((item, i) => {
                if (i === this.state.selectDay) {
                    item = this.state.activeNote;
                }
                return item;
            })]
        });
    };

    onSelectDay = (day) => {
        this.setState({
            activeNote: this.state.notes[day - 1],
            selectDay: day - 1
        });
    };

    onChangeNote = (e) => {
        this.setState({
            activeNote: e.target.value
        });
    };

    render() {
        let {date, month, year, activeNote, notes, selectDay} = this.state;
        let daysCurrentMount = DateExtend.daysInMonth(this.state.month + 1, this.state.year);
        for (let i = 1; i <= daysCurrentMount; i++) {
            this.state.notes.push("Вы ничего не запланировали на этот день.");
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        Сегодня: {date}.{month + 1}.{year}
                        <br />
                        Дней в этом месяце: {daysCurrentMount}
                        <br className="clearfix"/>
                        <Calendar selectDay={selectDay} days={notes} date={date} month={month} year={year}
                                  onSelectDay={this.onSelectDay}/>
                        <Notes activeNote={activeNote} onChangeNote={this.onChangeNote}
                               onAppendNote={this.onAppendNote}/>
                        <button onClick={this.onPrevMounth}>предыдущий месяц</button>
                        <button onClick={this.onNextMounth}>следующий месяц</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarContainer;