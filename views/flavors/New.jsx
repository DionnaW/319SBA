const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Flavor'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/flavors' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Color: < input type="text" name="color"/> <br />
                    Is Ready to Use: <input type="checkbox" name="readyToUse"/> <br />
                    <input type="submit" name="" value="Create Flavor"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;