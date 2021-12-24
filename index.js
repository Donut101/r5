

//  GET
function getUser() {
    let getId = document.getElementById("getID").value
    axios.get("http://localhost:4000/users").then((response) => {
        document.getElementById("tableid").innerHTML = '';
        let html = ''
        for (let i = 0; i < response.data.length; i++) {
            if (getId == i) {
                html = ` <tr>
                <td>${i}</td>
                <td>${response.data[i].name}</td>
                <td>${response.data[i].email}</td>
                <td>${response.data[i].address}</td>
                </tr>`
            } else {
                html += ` <tr>
                <td>${i}</td>
                <td>${response.data[i].name}</td>
                <td>${response.data[i].email}</td>
                <td>${response.data[i].address}</td>
                </tr>`
            }
        }
        console.log(html)
        document.getElementById("tableid").innerHTML = html
    }
    )
        .catch((error) => {
            alert("An Error Occurred.");
        });
}

// CREATE
function createUser() {
    let name = document.getElementById("createName").value
    let email = document.getElementById("createEmail").value
    let address = document.getElementById("createAdd").value

    axios.post('http://localhost:4000/user', {
        name: name,
        email: email,
        address: address
    })
        .then((response) => {
            if (response.status === 200) {
                alert("User Created Successfully")
            }
        }, (error) => {
            alert("An Error Occurred.");
        });

}

// UPDATE

function updateUser() {
    let id = document.getElementById("updateId").value
    let name = document.getElementById("updateName").value
    let email = document.getElementById("updateEmail").value
    let address = document.getElementById("updateAdd").value

    axios.put(`http://localhost:4000/user/${id}`, {
        name: name,
        email: email,
        address: address
    })
        .then((response) => {
            if (response.status === 200) {
                alert("User Updated Successfully")
            }
        }, (error) => {
            alert("An Error Occurred.");
        });

}
// DELETE

function deleteUser() {
    let id = document.getElementById("deleteID").value
    console.log(id)
    axios.delete(`http://localhost:4000/user/${id}`).then((response) => {
        if (response.status === 200 && id) {
            alert("User Updated Successfully")
        } else if (response.status === 200 && !id) {

            alert("All Users Deleted.")
        } else {
            alert("An Error occurred.")
        }
    }
    )
        .catch((error) => {
            alert("An Error Occurred.");
        });
}