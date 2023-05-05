import React from "react";
import "./css/Form.css";

function Form() {
  return (
    <>
      {/* <button type="button" class="btn btn-primary text-align" disabled>
        Create an account
      </button> */}
      <form class="form-inline navbar-nav">
        <div class="d-grid gap-4 d-md-flex justify-content-md-end p-5">
          <button type="button" class="btn btn-primary btn-lg">
            Contact us
          </button>
        </div>
      </form>
    </>
  );
}
export default Form;
