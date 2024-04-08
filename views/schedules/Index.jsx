const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { schedules } = this.props;

        return (
            <DefaultLayout title={"Schedules Index Page"}>
                <nav>
                    <a href="/schedules/new">Create a New Schedule</a>
                </nav>
                <ul>
                    {schedules.map((schedule, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/schedules/${schedule._id}`}>
                                    {schedule.name}
                                </a> {' '}
                                is {schedule.date} <br></br>
                                {schedule.dateAllSet
                                ? `Your Date is all set`
                            :   `Your Date is not set`}
                            <br />
                            <a href={`/schedules/${schedule._id}/edit`}>Edit This Schedule</a>
                            <form action={`/schedules/${schedule._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            </li>
                        )
                    })

                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index;