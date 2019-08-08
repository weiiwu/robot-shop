import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">amount</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-capitalize">total</p>
        </div>
      </div>
    </div>
  );
}
