import React, { useState, useEffect } from "react";


const ContactAPIProject = () => {
  const [formdata, setFormdata] = useState({
    Name: " ",
    Email: " ",
    Class: " ",

  });
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    getContactList();
  }, []); 

  const getContactList = async () => {
    try {
      let resp = await fetch("http://localhost:3000/items");
      let result = await resp.json();
      setContactList(result);
    } catch (error) {
      console.error("Error fetching contact list:", error);
    }
  };

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formdata.Name && formdata.Email && formdata.Class) {
      addContact();
    } else {
      alert("Please fill out all fields.");
    }
  };

  const addContact = async () => {
    let headers = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      let resp = await fetch("http://localhost:3000/items", headers);
      let result = await resp.json();
      getContactList();
      formEmpty();
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleDelete = async (id) => {
    let headers = {
      method: "DELETE",
    };

    try {
      let resp = await fetch(`http://localhost:3000/items/${id}`, headers);
      let result = await resp.json();
      getContactList();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleEdit = (contact) => {
    setFormdata(contact);
  };

  const editContact = async () => {
    let headers = {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-type": "application/json",
      },
    };

    let id = formdata.id;

    try {
      let response = await fetch(`http://localhost:3000/items/${id}`, headers);
      let result = await response.json();
      getContactList();
      formEmpty();
    } catch (error) {
      console.error("Error editing contact:", error);
    }
  };

  const formEmpty = () => {
    setFormdata( {name: "", email: "", class: "" });
  };

  return (
    <div className="BDY">
              <h3 className="H3"> <pre>    Plese Fill This Form</pre></h3>
              <br/>
      <form className="FORM"onSubmit={handleSubmit}>
        <div>
          Name:{" "} 
          <input
            type="text"
            name="Name"
            value={formdata.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          Email :{" "}
          <input
            type="Email"
            name="Email"
            value={formdata.Email}
            onChange={handleChange}
          />
        </div>
      
        <div>
            Class :{" "}
            <input
            type="text"
            name="Class"
            value={formdata.Class}
            onChange={handleChange}/>
        </div>
       <br/>

       <pre>            <input type="Submit" value="Submit" />   <input type="button" value="ReEdit" onClick={editContact} /></pre>
      </form>
      <br/>

      {JSON.stringify(formdata)}

      <div>
        <br/>
        <br/>

        <h5 className="LIST">List of Students</h5>
        <ul>
          {contactList.map((contact) => (
            <li key={contact.id}>
              Name - {contact.name} Email - {contact.email} Class -{" "}
              {contact.Class}
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
              <button onClick={() => handleEdit(contact)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactAPIProject;