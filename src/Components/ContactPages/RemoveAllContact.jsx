const RemoveAllContact = (props) => {
  return (
    <div>
      <button onClick={()=>props.handleRemoveAll()} className="btn btn-danger form-control">Remove All</button>
    </div>
  );
};

export default RemoveAllContact;
