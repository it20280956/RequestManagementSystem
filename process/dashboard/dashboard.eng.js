//dashboard data load
const engDashboardDataLoad = () => {
    firestore
        .collection('emp')
        .get()
        .then((res) => {
            $('#empCount').html(res.size);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Set data for dashboard
const empIdForSetEmpData = (id) => {
    firestore
        .collection('emp')
        .doc(id)
        .get()
        .then((res) => {
            if (res.exists) {
                const data = res.data();
                $('#empName').html(data.name);
                $('#empid').html(data.empid);
            } else {
                alert("invalied data ")
            }
        })
        .catch((err) => {
            console.error(err);
        });

        const eid = $('#empSelect').val();

        firestore
            .collection('aprservices')
            .where('emp', '==', eid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const services = data.service.split(',');
                    const ulElement = document.getElementById('approved_service');
        
                    ulElement.innerHTML = '';
        
                    services.forEach((service) => {
                        const liElement = document.createElement('li');
                        liElement.textContent = service;
                        ulElement.appendChild(liElement);
                    });
        
                });
            })
            .catch((error) => {
                console.error(error);
            });
        
}

//set services
const loadServices = () => {
    firestore
        .collection('services')
        .get()
        .then((res) => {
            var reqServicesElement = document.getElementById('reqServices');
            res.forEach((records) => {
                const data = records.data();
                // Create the checkbox input element
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'btn-check';
                checkbox.id = data.id; // Set the checkbox's id (you may need to adjust this)

                // Create the label element
                const label = document.createElement('label');
                label.className = 'btn btn-outline-primary';
                label.htmlFor = data.id; // Set the 'for' attribute to match the checkbox's id
                label.textContent = data.service;

                // Append the checkbox and label to the reqServices element
                reqServicesElement.appendChild(checkbox);
                reqServicesElement.appendChild(label);
            })
        })
        .catch((err) => {
            console.log(err)
        });
}

function checkedService(){
    const checkedCheckboxes = document.querySelectorAll('#reqServices input[type="checkbox"]:checked');
    const checkedIds = Array.from(checkedCheckboxes).map(checkbox => checkbox.id);
    const eid = $('#empSelect').val();
    
    if (checkedIds.length > 0 && eid != null) {
        const reqsvs = {
           empid:eid,
           id:checkedIds,
           service:checkedIds
        };
        firestore
        .collection('reqservices')
        .add(reqsvs)
        .then(() => {
           alert("request is success");
           location.reload();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }else{
        alert("Somthing went wrong !")
    }
}
