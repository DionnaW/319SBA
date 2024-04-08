//toppings/Edit.jsx
const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      <form action={`/toppings/${this.props.topping._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.topping.name}/><br/>
          Price: <input type="number" name="price"  defaultValue={this.props.topping.price}/><br/>
          Is Ready To Eat:
              { this.props.topping.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;