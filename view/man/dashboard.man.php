<?php
$title = "DashBoard";
require('./header.man.php');
?>

<div class="col-12 mb-1 mt-1">
    <div class="row">
        <div class="col-12 p-4 bg-success text-center ">
            <div class="row">
                <div class="col-12 font-weight-bold h4 text-black"><i class="bi bi-pc-display-horizontal"></i> &nbsp; Total System Access Request : <span id="reqCount"></span></div>
            </div>
        </div>
    </div>
</div>

<div class="col-12 mx-auto mt-3 p-4 bg-white">
    <div class="row">
        <div class="col-12">

        <div class="col-12">
            <h2 class="text-center text-secondary">Request</h2>
            <br><br>
            <table class="table table-striped" id="reqTableMan">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Emp Id</th>
                        <th scope="col">Discription</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="reqTableBodyMan">
                </tbody>
            </table>
        </div>

    </div>
</div>


<script>
    window.onload = function() {
        //load req count
        manDashboardDataLoad();
        loadTable();
    };
</script>

<?php
require('./footer.man.php');
?>