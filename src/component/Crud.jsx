import { useEffect, useState } from "react";
import { createUser, deleteUser, updateUser, users } from "../API/Users";
import { message } from "antd";

const Crud = () => {
  const [dataSource, setDataSource] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    users().then((res) => {
      setDataSource(res);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then((res) => {
      const newDataSource = dataSource.filter((user) => user.id !== id);
      setDataSource(newDataSource);
      message.success("Data Successfully Deleted");
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    createUser(name, email).then((res) => {
      setDataSource([...dataSource, res]);
      setName("");
      setEmail("");
      message.success("Data Added");
    });
  };

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const handleUpdate = () => {
    updateUser(editId, {
      name: editName,
      email: editEmail,
    })
      .then((res) => {
        const updatedDataSource = dataSource.map((user) =>
          user.id === editId ? res : user
        );
        setDataSource(updatedDataSource);
        setEditId(null);
        setEditName("");
        setEditEmail("");
        message.success("Data Successfully Updated");
      })
      .catch((err) => {
        alert("Something went wrong: " + err.message);
      });
  };

  // const handleUpdate = () => {
  //   updateUser(editId, {
  //     name: editName,
  //     email: editEmail,
  //   })
  //     .then((res) => {
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       alert("Something went wrong" + err.message);
  //     });
  // };

  return (
    <div className="crud_container">
      <div className="bg-info-subtle p-3 border">
        <div className="my-3">
          <form onSubmit={handleAdd}>
            <input
              className="me-2"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="me-2"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-success px-5">Add</button>
          </form>
        </div>
        <table className="table-bordered border-primary table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((user) =>
              user.id === editId ? (
                <tr key={user.id}>
                  <td>
                    <input
                      type="text"
                      name="edit_name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="edit_email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="bg-info px-3 border border-none"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="bg-danger px-3 border border-none"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="bg-info px-3 border border-none"
                      onClick={() => {
                        setEditId(user.id);
                        setEditName(user.name);
                        setEditEmail(user.email);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-danger px-3 border border-none"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
