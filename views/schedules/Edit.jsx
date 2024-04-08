import React, { useState, useEffect } from 'react';
import DefaultLayout from '../layout/Default';

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      <form action={`/schedules/${this.props.schedule._id}?_method=PUT`} method="POST">
          Date: <input type="date" name="date" defaultValue={this.props.schedule.name}/><br/>
          startTime: <input type="date" name="startTime"  defaultValue={this.props.schedule.startTime}/><br/>
          endTime: <input type="date" name="endTime"  defaultValue={this.props.schedule.endTime}/><br/>
          Date is Scheduled:
              { this.props.schedule.dateAllSet? <input type="checkbox" name="dateAllSet" defaultChecked />: <input type="checkbox" name="dateAllSet"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;