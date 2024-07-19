const users = () => {
    return (
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .catch((error) => {
                alert("Error occured" + error.message)
            })
    )
}

const deleteUser = (id) => {
    return (
        fetch("https://jsonplaceholder.typicode.com/users" + id, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
            .catch((error) => alert(" An error occured" + error.message))
    )
}

const createUser = (name, email) => {
    return (
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
            })
        }).then(res => res.json())
            .catch((error) => alert("An error occured:" + error.message))
    )
}


const updateUser = (id, data) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .catch((error) => alert("An error occurred: " + error.message));
};



export { createUser, users, deleteUser, updateUser }