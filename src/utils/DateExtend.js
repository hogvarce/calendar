import _ from 'lodash';

class DateExtend extends Date {

    static daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }

    static dayOfWeek(inx) {
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[inx];
    }

    static getFirstDayMouth(y, m) {
        let day = new Date(y, m, 1);
        return 7 - day.getDay();
    }

    static getLastDateMouth(y, m) {
        let lastDay = new Date(y, m + 1, 0);
        return lastDay.getDate();
    }

    static getMatrix(y, m) {
        let rows = _.range(0, 6);
        let cols = _.range(0, 7);
        let matrix = [];
        let date = new Date(y, m);
        let numDays = new Date(y, m + 1, 0).getDate();
        let dayNum;

        _.each(rows, function (row) {
            let week = [];

            _.each(cols, function (col) {
                if (row == 0) {
                    dayNum = col - date.getDay() + 1;
                    week.push(col < date.getDay() ? -(new Date(y, m, -(date.getDay() - 1 - col)).getDate()) : dayNum);
                } else {
                    dayNum = _.last(matrix)[6] + col + 1;
                    week.push(dayNum <= numDays ? dayNum : -(dayNum - numDays));
                }
            });

            if (!row || week[0] > 1) matrix.push(week);

        });

        return matrix;
    }
}

export default DateExtend;