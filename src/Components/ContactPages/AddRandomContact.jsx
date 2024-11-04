import { getRandomeUser } from "../../Utility/api";
const AddRandomContact = (props) => {
  const handleRandomContact = async () => {
    const responseFromAPI = (await getRandomeUser()).data;
    let randomContact = {
      name: responseFromAPI.first_name + " " + responseFromAPI.last_name,
      phone: responseFromAPI.phone_number,
      email: responseFromAPI.email,
    };
    props.handleAddRandomContact(randomContact);
  };
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => handleRandomContact()}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
