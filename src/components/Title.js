import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitialize font-weight-bold">
          {name} <strong className="text-main">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
