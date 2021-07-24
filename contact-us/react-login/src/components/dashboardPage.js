import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
import "./dashboardPage.css"
import { getSubmissionsAction } from '../actions/submissionsActions'
import {
  getSubscriptionsAction, createSubscriptionAction,
  deleteSubscriptionAction
} from '../actions/subscriptionActions'
import DashboardTable from './dashboardTable';
import SubscriptionContainer from './subscriptionContainer';
import { registerUserAction } from '../actions/authenticationActions'

class DashboardPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submissions: [],
      subscriptions: []
    }
  }

  onHandleRegistration = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name, email, password
    };

    this.props.dispatch(registerUserAction(data));
  }

  onHandleSubscription = (event) => {
    console.log('inside subs on handle')
    event.preventDefault();
    let sub_email = event.target.sub_email.value;

    const data = {
      email: sub_email
    }
    this.props.dispatch(createSubscriptionAction(data))
  }

  onHandleSubscriptionDelete = (email) => {
    const data = {
      email
    }
    this.props.dispatch(deleteSubscriptionAction(data))
  }

  componentDidMount() {
    this.props.dispatch(getSubmissionsAction());
    this.props.dispatch(getSubscriptionsAction())
  }

  componentDidUpdate(prevProps) {
    if (prevProps.submission !== this.props.submission) {
      this.setState({
        submissions: this.props.submission
      })
    }
    if (prevProps.subscriptions !== this.props.subscriptions) {
      console.log(this.props.subscriptions, "CDU props subscription")
      this.setState({
        subscriptions: this.props.subscriptions
      })
    }
  }

  render() {
    return (
      <div className="dashboard__container">
        <div className="summary">
          <div classname="content__container">
            <div className="content__header">
              <div className="head">
                <h2>
                  Recent Contact us Submissions
                </h2>
              </div>
            </div>
            <div className="content__content">
              <DashboardTable data={this.state.submissions} />
            </div>
          </div>
        </div>
        <div className="admins">
          <div className="admins__container">
            <div className="admins__container-new">
              <h3 className="head">
                New Admin Account
              </h3>
              <div className="form__container">
                <form onSubmit={this.onHandleRegistration}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                  </div>
                  <div className="btn-container">
                    <button className="reg-btn">Create Account</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="admins__container-subs">
              <h3 className="head">
                New Notification Subscription
              </h3>
              <div className="form__container">
                <form onSubmit={this.onHandleSubscription}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="sub_email" id="sub_email" />
                  </div>
                  <div className="btn-container">
                    <button className="reg-btn">Create Notification Subscription.</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="admins__container-subs">
              <h3 className="head">
                Current Subscriptions
              </h3>
              <div className="form__container">
                <SubscriptionContainer data={this.state.subscriptions} onDelete={this.onHandleSubscriptionDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  submission: state.submission?.response?.data,
  subscriptions: state.subscription?.response?.data
})
export default connect(mapStateToProps)(DashboardPage);