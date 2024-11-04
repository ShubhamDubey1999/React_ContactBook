import React from "react";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavouriteContacts from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Shubham Dev",
          phone: "666-666-7770",
          email: "sd@reactjs.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Vasudev",
          phone: "111-222-0000",
          email: "vasudev@reactjs.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "Vivekanand",
          phone: "999-222-1111",
          email: "svk@reactjs.com",
          isFavorite: true,
        },
      ],
      selectedContact: undefined,
      isUpdating: false,
    };
  }
  handleDeleteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.filter((x) => x.id != contact.id),
      };
    });
  };
  handleFavoriteContact = (contact) => {
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == contact.id) {
            return { ...obj, isFavorite: !obj.isFavorite };
          } else {
            return obj;
          }
        }),
      };
    });
  };
  handleAddContact = (newContact) => {
    if (newContact.name == "") {
      return { status: "failure", msg: "Please enter valid Name" };
    } else if (newContact.phone == "") {
      return { status: "failure", msg: "Please enter valid Phone" };
    }
    const duplicateRecord = this.state.contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });
    if (duplicateRecord.length > 0) {
      return { status: "failure", msg: "Duplicate Record" };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        isFavorite: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat([newFinalContact]),
        };
      });
      return { status: "success", msg: "Contact Added Successfully" };
    }
  };
  handleAddRandomContact = (newContact) => {
    const newFinalContact = {
      ...newContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      isFavorite: false,
    };
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat([newFinalContact]),
      };
    });
  };
  handleRemoveAll = () => {
    this.setState((prevState) => {
      return {
        contactList: [],
      };
    });
  };
  handleUpdateClick = (contact) => {
    this.setState((prevState) => {
      return {
        selectedContact: contact,
        isUpdating: true,
      };
    });
  };
  handleCancelUpdateClick = (contact) => {
    this.setState((prevState) => {
      return {
        selectedContact: undefined,
        isUpdating: false,
      };
    });
  };
  handleUpdateContact = (updatedContact) => {
    if (updatedContact.name == "") {
      return { status: "failure", msg: "Please enter valid Name" };
    } else if (updatedContact.phone == "") {
      return { status: "failure", msg: "Please enter valid Phone" };
    }
    console.log(updatedContact);
    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) => {
          if (obj.id == updatedContact.id) {
            return {
              ...obj,
              name: updatedContact.name,
              email: updatedContact.email,
              phone: updatedContact.phone,
            };
          }
          return obj;
        }),
        selectedContact: undefined,
        isUpdating: false,
      };
    });
    return { status: "success", msg: "Contact Updated Successfully" };
  };
  render() {
    return (
      <>
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact
                handleAddRandomContact={this.handleAddRandomContact}
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContact handleRemoveAll={this.handleRemoveAll} />
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <AddContact
                  isUpdating={this.state.isUpdating}
                  selectedContact={this.state.selectedContact}
                  handleCancelUpdateClick={this.handleCancelUpdateClick}
                  handleAddContact={this.handleAddContact}
                  handleUpdateContact={this.handleUpdateContact}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <FavouriteContacts
                  handleDeleteContact={this.handleDeleteContact}
                  handleFavoriteContact={this.handleFavoriteContact}
                  handleUpdateClick={this.handleUpdateClick}
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavorite == true
                  )}
                />
              </div>
            </div>
            <div className="row py-2">
              <div className="col-8 offset-2 row">
                <GeneralContacts
                  handleDeleteContact={this.handleDeleteContact}
                  handleFavoriteContact={this.handleFavoriteContact}
                  handleUpdateClick={this.handleUpdateClick}
                  contacts={this.state.contactList.filter(
                    (x) => x.isFavorite == false
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactIndex;
