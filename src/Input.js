/* eslint-disable max-len */
import {Component} from "react";
import React from "react";
import $ from 'jquery';



class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});

    var messageContent = this.state.text

    function translate() {
    var lang = "en-es"

    $.get("translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200503T164447Z.6d0c87f6e168a486.750c18ea3f04823355bbb8903080aef0f33ed645&text="+messageContent+"&lang="+lang, function(result) {
      messageContent = result;
      console.log("The value of result is " + result)
    });

  }
    // the string that is entered through those paranthesis will be the message that is sent
    // use google translate api to translate message content 
    // send translate message

    translate();
    this.props.onSendMessage(messageContent);

  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
