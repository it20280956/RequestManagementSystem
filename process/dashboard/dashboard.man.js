const manDashboardDataLoad = () => {
    firestore
        .collection('reqservices')
        .get()
        .then((res) => {
            $('#reqCount').html(res.size);
        })
        .catch((error) => {
            console.log(error);
        });
}

const loadTable = ()=>{
    const tableBody = $('#reqTableBodyMan');
    firestore
    .collection('reqservices')
    .get()
    .then((querySnapshot) => {
        let rowNumber = 1; // To number the rows
        querySnapshot.forEach((doc) => {
            const docId = doc.id
            const data = doc.data();
            const empName = data.empid; // Replace with the actual field name
            const service = data.service; // Replace with the actual field name

            // Create a new table row
            const row = $('<tr>');

            // Add table cells for emp name, service, and action
            row.append(`<th scope="row">${rowNumber}</th>`);
            row.append(`<td>${empName}</td>`);
            row.append(`<td>${service}</td>`);
            row.append(`<td><button class="btn btn-success" onclick="aprove('${docId}','${service}','${empName}')">Aprove</button> <button class="btn btn-danger" onclick="decline('${docId}')">Decline</button></td>`); // Add action buttons

            // Append the row to the table
            tableBody.append(row);
            rowNumber++;
        });
    })
    .catch((error) => {
        console.error(error);
    });
}


const aprove = (id,service,empName)=>{
    data={
        emp:empName,
        service:service,
    }
    
    firestore
    .collection('aprservices')
    .add(data)
    .then(() => {
       alert("aprove is success");
       firestore
       .collection('reqservices')
       .doc(id) // Provide the document ID you want to delete
       .delete()
       .then(() => {
           location.reload();
       })
       .catch((error) => {
           console.error(`Error deleting document with ID ${id}:`, error);
       });
       location.reload();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });


    

}

const decline = (id) => {
    firestore
        .collection('reqservices')
        .doc(id) // Provide the document ID you want to delete
        .delete()
        .then(() => {
            alert(`Document with ID ${id} has been successfully deleted.`);
            location.reload();
        })
        .catch((error) => {
            console.error(`Error deleting document with ID ${id}:`, error);
        });
}
