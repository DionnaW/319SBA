const React = require('react');
const DefaultLayout = require('../layout/Default')
const moment = require('moment');

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Date'}>
                <form action='/schedules' method="POST">
                    Date: <input type="date" name="name" /><br />
                    startTime: < input type="time" name="startTime"/> <br />
                    Date is Set: <input type="checkbox" name="dateAllSet"/> <br />
                    <input type="submit" name="" value="Create Schedule"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;