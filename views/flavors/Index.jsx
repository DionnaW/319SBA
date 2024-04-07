const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { flavors } = this.props;
        // const flavors = this.props.flavors;

        return (
            <DefaultLayout title={"Flavors Index Page"}>
                <nav>
                    <a href="/flavors/new">Create a New Flavor</a>
                </nav>
                <ul>
                    {flavors.map((flavor, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/flavors/${flavor._id}`}>
                                    {flavor.name}
                                </a> {' '}
                                is {flavor.color} <br></br>
                                {flavor.readyToUse
                                ? `It is ready to use`
                            :   `It is NOT ready to use`}
                            <br />
                            <a href={`/flavors/${flavor._id}/edit`}>Edit This Flavor</a>
                            <form action={`/flavors/${flavor._id}?_method=DELETE`} method="POST">
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