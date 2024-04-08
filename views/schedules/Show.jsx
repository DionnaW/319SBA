const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const schedule = this.props.schedule;

        return (
            <DefaultLayout title="Show an Individual Schedule">
                <p>The {schedule.name} is {schedule.date}</p>
                {schedule.dateAllSet ? 'The date is set' : "NOT SET!"}
                <br />
                <a href={`/schedules/${schedule._id}/edit`}>Edit This Schedule</a>
                <form action={`/schedules/${schedule._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/schedules">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;