import React, { Component } from "react";
import { getUserList } from "../services/data";
import User from "./User";

class UserContainer extends Component {
  state = {
    userList: []
  };

  componentDidMount() {
    this.setState({ userList: getUserList() });
  }

  handleChecked = user => {
    const userList = [...this.state.userList];
    const index = userList.indexOf(user);
    userList[index] = { ...userList[index] };
    userList[index].checked = !userList[index].checked;

    this.setState({ userList });
  };

  render() {
    const { userList } = this.state;

    const checkedUsers = userList.filter(user => user.checked === true);

    return (
      <div>
        <div className="userContainer">
          {userList.map(user => (
            <User key={user.id} onClick={this.handleChecked} data={user} />
          ))}
        </div>
        <div className="checked">
          {checkedUsers.map(checked => (
            <pre key={checked.id}>{checked.name}</pre>
          ))}
        </div>
      </div>
    );
  }
}

export default UserContainer;
