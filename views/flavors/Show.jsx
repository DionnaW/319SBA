const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const flavor = this.props.flavor;

        return (
            <DefaultLayout title="Show an Individual Flavor">
                <p>The {flavor.name} is {flavor.color}</p>
                {flavor.readyToUse ? 'It is ready to use' : "NOT READY!"}
                <br />
                <a href={`/flavors/${flavor._id}/edit`}>Edit This Flavor</a>
                <form action={`/flavors/${flavor._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/flavors">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;