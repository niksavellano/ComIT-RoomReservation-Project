import React, { Component, useState } from "react";
import firebase from "firebase";
import "./css/newsfeed.css";
import moment from "moment";
import { toast } from "react-toastify";
import $ from "jquery";
// import Posts from "./Posts";

class Newsfeed extends Component {
  state = {
    postArea: "",
    postItem: []
  };
  database = firebase.database().ref();
  rootRef = this.database.child("Posts");
  handlePostChange = event => {
    this.setState({
      postArea: event.target.value
    });
  };
  reload = text => {
    toast.success(text);
    this.state.postArea.value = "";
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);
  };
  isDisabled = () => {
    if (this.state.postArea <= 0) {
      return true;
    } else {
      return false;
    }
  };
  post = () => {
    let name = firebase.auth().currentUser.displayName;
    let content = document.getElementById("postArea").value;
    let date = new Date();
    let newdDate = moment(date).format("LLLL");

    this.submitPost(name, newdDate, content);
    this.reload("Posted!");
  };

  displayPost = () => {
    this.rootRef.orderByChild("date").on("child_added", snap => {
      let name = snap.child("name").val();
      let content = snap.child("content").val();
      let contentDate = snap.child("date").val();
      let uid = snap.key;

      let containerContent = `<div class="posts" key=${uid}><h1>${name}</h1><p><em>${contentDate}</em></p><p>${content}</p></div>`;
      $("#content").append(`${containerContent}`);
    });
  };
  componentDidMount() {
    this.displayPost();
  }

  // displays = () => {
  //   this.rootRef.on("child_added", snap => {
  //     let a = snap.val();
  //     console.log(a);
  //     this.setState({ postItem: a });
  //   });
  // };
  // componentDidMount() {
  //   this.displays();
  // }

  // componentDidMount() {
  //   console.log("Mounted");
  //   this.rootRef.on("child_added", snap => {
  //     let posted = [];
  //     posted = snap.val();
  //     console.log(posted);

  //     this.setState({
  //       posted: this.state.postItem
  //     });
  //   });
  // }

  submitPost = (name, date, content) => {
    let post = this.rootRef.push();
    post.set({
      name: name,
      date: date,
      content: content
    });
  };

  render() {
    return (
      <div>
        <form>
          <div className="container">
            <div className="form-group">
              <textarea
                className="form-control"
                id="postArea"
                rows="3"
                value={this.state.postArea}
                onChange={this.handlePostChange}
                placeholder="Post Something!!!"
              ></textarea>
              <button
                className="btn btn3"
                onClick={this.post}
                disabled={this.isDisabled()}
              >
                Post
              </button>
            </div>
          </div>
        </form>
        <div id="content" className="jumbotron">
          {/* <Posts /> */}
          {/* {Object.values(this.state.postItem).map((posts, index) => {
            return <div>{posts}</div>;
          })} */}
        </div>
      </div>
    );
  }
}

export default Newsfeed;
