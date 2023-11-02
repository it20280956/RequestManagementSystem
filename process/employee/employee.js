//data validation
function validateData() {
    const empName = $('#empName').val();
    const empid = $('#empid').val();
    const empdetails = $('#empdetails').val();

    if (
        !empName ||
        !empid ||
        !empdetails
    ) {
        return false;
    }
    return true;
}

//emp add
const addempData = () => {
    if (validateData()) {
        const tempEmp = {
            name: $('#empName').val(),
            empid: $('#empid').val(),
            empdetails: $('#empdetails').val(),
        };

        //firestore
        firestore
            .collection('emp')
            .add(tempEmp)
            .then((res) => {
                alert("Empolyee is added");
                loadsEmp();
                location.reload();
            })
            .catch((err) => {
                console.log(err)
            });
    } else {
        alert("Fill The All Required fields!")
    }
}

// Set data for an update
const empIdForUpdate = (id) => {
    firestore
        .collection('emp')
        .doc(id)
        .get()
        .then((res) => {
            if (res.exists) {
                const data = res.data();
                $('#empName').val(data.name);
                $('#empid').val(data.empid);
                $('#empdetails').val(data.empdetails);
            } else {
                alert("invalied data ")
            }
        })
        .catch((err) => {
            console.error(err);
        });
}

function UpdateEmp() {

    const id = $('#empSelect').val();

    const tempEmp = {
        name: $('#empName').val(),
        empid: $('#empid').val(),
        empdetails: $('#empdetails').val(),

    };

    firestore
        .collection('emp')
        .doc(id)
        .update(tempEmp)
        .then((res) => {
            alert("data is updated !")
            loadsEmp();
        })
        .catch((err) => {
            console.log(err)
        });
}

//delete product
const deleteEmp = () => {
    const id = $('#empSelect').val();

    firestore
        .collection('emp')
        .doc(id)
        .delete()
        .then((res) => {
            alert("data is deleted !")
            location.reload();
        })
        .catch((err) => {
            console.log(err)
        });
}

//load product
const loadsEmp = () => {
    firestore
        .collection('emp')
        .get()
        .then((res) => {
            var selectElement = document.getElementById('empSelect');
            selectElement.innerHTML = '<option value="" selected disabled>---Select Employee---</option>';

            res.forEach((records) => {
                const data = records.data();
                var option = document.createElement('option');
                option.value = records.id;
                option.textContent = data.name + " - " + data.empid;
                selectElement.appendChild(option);
            })
        })
        .catch((err) => {
            console.log(err)
        });
}
