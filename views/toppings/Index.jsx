const React = require('react');
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { toppings } = this.props;

        return (
            <DefaultLayout title={"Toppings Index Page"}>
                <nav>
                    <a href="/toppings/new">Create a New Topping</a>
                </nav>
                <ul>
                    {toppings.map((topping, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/toppings/${topping._id}`}>
                                    {topping.name}
                                </a> {' '}
                                is {topping.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}<br></br>
                                {topping.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            <a href={`/toppings/${topping._id}/edit`}>Edit This Topping</a>
                            <form action={`/toppings/${topping._id}?_method=DELETE`} method="POST">
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