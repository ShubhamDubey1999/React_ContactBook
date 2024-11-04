import React from "react";
import Contact from "./Contact";
class FavouriteContacts extends React.Component {
  render() {
    return (
      <div
        className="col-12 py-2"
        style={{ borderRadius: "10px", backgroundColor: "#323637" }}
      >
        <div className="text-center text-white-50">Favorites</div>
        <div className="p-2">
          {this.props.contacts.map((contact, index) => (
            <Contact
              handleDeleteContact={this.props.handleDeleteContact}
              handleFavoriteContact={this.props.handleFavoriteContact}
              handleUpdateClick={this.props.handleUpdateClick}
              contact={contact}
              key={index}
            ></Contact>
          ))}
        </div>
      </div>
    );
  }
}

export default FavouriteContacts;
