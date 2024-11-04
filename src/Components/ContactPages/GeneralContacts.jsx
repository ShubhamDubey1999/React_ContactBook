import React from "react";
import Contact from "./Contact";
class GeneralContacts extends React.Component {
  render() {
    return (
      <div
        className="col-12 py-2"
        style={{ borderRadius: "10px", backgroundColor: "#323637" }}
      >
        <div className="text-center text-white-50">Other Contacts</div>
        <div className="p-2">
          {this.props.contacts.map((contact, index) => (
            <Contact
              contact={contact}
              key={index}
              handleDeleteContact={this.props.handleDeleteContact}
              handleFavoriteContact={this.props.handleFavoriteContact}
              handleUpdateClick={this.props.handleUpdateClick}
            ></Contact>
          ))}
        </div>
      </div>
    );
  }
}
export default GeneralContacts;
