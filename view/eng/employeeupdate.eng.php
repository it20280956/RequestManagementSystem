<?php
$title = "DashBoard";
require('./header.eng.php');
?>

<div class="d-flex flex-row justify-content-between align-items-center">
    <h1 class="fw-bold fs-2 m-3 text-center">Update / Delete roduct Details </h1>
</div>

<div class="d-flex flex-row justify-content-center align-items-center">
    <!-- emp select -->
    <div class="d-flex flex-column w-75 my-3">
        <label for="">Select Employee Name / id</label>
        <select class="form-select rounded-pill text-center" id="empSelect" onchange="empIdForUpdate(this.value)">
            <option value="" selected disabled>---Select Employee---</option>
        </select>
    </div>
</div>

<div class="d-flex flex-column flex-md-row m-3 align-items-center">

        <!-- product data form -->
        <div class="col-12 col-md-8 d-flex flex-column">

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

                <!-- update/delete product btn -->
                <div class="col-12 mx-auto d-flex flex-column justify-content-center my-3" id="productUDbtnSection">
                    <button class="btn btn-lg btn-dark rounded-pill mx-5 px-3 my-2" onclick=" UpdateEmp()">Update Data</button>
                    <button class="btn btn-lg btn-danger rounded-pill mx-5 px-3 my-2" onclick="deleteEmp()">Delete Data</button>
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
<script>
    window.onload = function() {
        //load emp
        loadsEmp();
    };
</script>


<?php
require('./footer.eng.php');
?>