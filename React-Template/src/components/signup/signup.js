import React, { Component } from "react";
import ModalInFunc from "../modal/modal";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { setModalIsOpen: false };
  }
  setModalIsOpenToTrue = () => {
    this.setState({ setModalIsOpen: true });
  };
  setModalIsOpenToFalse = () => {
    this.setState({ setModalIsOpen: false });
  };
  Click = (event) => {
    event.preventDefault();
    const objList = {
      Email: event.target.children[0].value,
      Password: event.target.children[1].value,
    };

    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];
    for (let user of users) {
      if (user.Email === objList.Email) {
        this.setModalIsOpenToTrue(true);
        return;
      }
    }

    users.push(objList);
    localStorage.setItem("users", JSON.stringify(users));
  };

  render() {
    return (
      <div className="signUpDiv">
        <h3>SIGN UP!!</h3>
        <form onSubmit={this.Click}>
          <input type="text" placeholder="Email"></input>
          <input type="text" placeholder="Password"></input>
          <button>Submit</button>
        </form>
        <>
          {this.state.setModalIsOpen && (
            <ModalInFunc
              setModalIsOpenToFalse={this.setModalIsOpenToFalse}
              title="acc does already exist"
              buttotxt="go back"
            ></ModalInFunc>
          )}
        </>
      </div>
    );
  }
}

export default Signup;
