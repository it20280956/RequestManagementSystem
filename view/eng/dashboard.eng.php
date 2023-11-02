<?php
$title = "DashBoard";
require('./header.eng.php');
?>

<div class="col-12 mb-1 mt-1">
    <div class="row">
        <div class="col-12 p-4 bg-success text-center ">
            <div class="row">
                <div class="col-12 font-weight-bold h4 text-black"><i class="bi bi-gear-wide-connected"></i> &nbsp; Total Employee : <span id="empCount"></span></div>
            </div>
        </div>
    </div>
</div>

<div class="col-12 d-flex flex-row align-self-start mx-auto mt-3 p-4 bg-white">

    <div class="d-flex flex-column col-4 justify-content-center align-items-center">
        <!-- emp select -->
        <div class="d-flex flex-column w-75 my-3">
            <label for="">Select Employee Name / id</label>
            <select class="form-select rounded-pill text-center" id="empSelect" onchange="empIdForSetEmpData(this.value)">
                <option value="" selected disabled>---Select Employee---</option>
            </select>
        </div>

        <div class="my-3">
            <p class="fw-bold">Employee Id : <span class="fw-semibold" id="empid"></span></p>
            <p class="fw-bold">Employee Name : <span class="fw-semibold" id="empName"></span></p>
            <p class="fw-bold">Approved service : 
                <span>
                    <ul id="approved_service"></ul>
                </span>
            </p>
        </div>


    </div>

    <div class="d-flex flex-column flex-wrap col-8 justify-content-center align-items-center">
        <div class="btn-group gap-1 mb-5" id="reqServices" role="group" aria-label="Basic checkbox toggle button group">
           
        </div>
        <div class="mt-5">
        <button class="btn btn-success" onclick="checkedService()">send</button>
        </div>

    </div>
</div>


<script>
    window.onload = function() {
        //load the emp
        engDashboardDataLoad();

        //load emp
        loadsEmp();

        //load service
        loadServices()
    };
</script>

<?php
require('./footer.eng.php');
?>