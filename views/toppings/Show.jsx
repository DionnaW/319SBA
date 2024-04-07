const React = require('react');
const DefaultLayout = require('../layout/Default')

class Show extends React.Component {
    render() {
        const topping = this.props.topping;

        return (
            <DefaultLayout title="Show an Individual Topping">
                <p>The {topping.name} is {topping.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
                {topping.readyToEat ? 'It is ready to eat' : "NOT READY!"}
                <br />
                <a href={`/toppings/${topping._id}/edit`}>Edit This Topping</a>
                <form action={`/toppings/${topping._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="DELETE" />
                </form>
                <a href="/toppings">Back to Index</a>
            </DefaultLayout >

        )
    }
}

module.exports = Show;