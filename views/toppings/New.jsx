const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New Topping'}>
                <form action='/toppings' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Price: < input type="number" name="price"/> <br />
                    Is Ready to Eat: <input type="checkbox" name="readyToEat"/> <br />
                    <input type="submit" name="" value="Create Topping"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;