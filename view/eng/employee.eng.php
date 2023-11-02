<?php
$title = "DashBoard";
require('./header.eng.php');
?>

<div class="d-flex flex-row justify-content-between align-items-center">
    <h1 class="fw-bold fs-2 m-3 text-center">Add Employee Details </h1>
</div>

<div class="d-flex flex-column flex-md-row m-3 align-items-center">
    <div class="row col-12">

        <!-- Employee data form -->
        <div class="col-12 col-md-7 d-flex flex-column">

            <!-- form -->
            <div class="d-flex flex-column">

                <!-- Employee name -->
                <div class="d-flex flex-column flex-md-row justify-content-between my-1">
                    <div class="d-flex flex-column w-100 me-1">
                        <label for="">Employee name<span class="text-danger ms-1 fw-bold">*</span></label>
                        <input type="text" class="rounded-pill form-control py-2" id="empName">
                    </div>
                </div>

                <!-- Employee id -->
                <div class="d-flex flex-column w-100 my-1">
                    <label for="">Employee id<span class="text-danger ms-1 fw-bold">*</span></label>
                    <input type="text" class="rounded-pill form-control py-2" id="empid">
                </div>

                <!-- Details -->
                <div class="d-flex flex-column flex-md-row justify-content-between my-1">
                    <div class="d-flex flex-column w-75 me-1">
                        <label for="">Ex:Details<span class="text-danger ms-1 fw-bold">*</span></label>
                        <textarea class="rounded form-control py-2" cols="10" rows="5" id="empdetails"></textarea>
                    </div>
                </div>

                <!-- add Employee btn -->
                <div class="col-12 mx-auto d-flex flex-column justify-content-center my-5">
                    <button class="btn btn-lg btn-dark rounded-pill mx-5 px-3" id="empAddBtnSection" onclick="addempData()">Add Employee</button>
                </div>

                <div class="col-12 spinnerDiv d-none" id="spin">
                    <div class="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>

<?php
require('./footer.eng.php');
?>