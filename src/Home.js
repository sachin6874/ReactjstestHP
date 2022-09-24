import React from "react";
import PackageContext from "./Component/Context";

const Home = () => {
  return (
    <PackageContext.Consumer>
      {(value) => (
        <div className="center">
          <div class="card" style={{width: "18rem"}}>
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"  style={{height: "18rem"}}class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Personal Details</h5>
              <p class="card-text">
               I am full time full stack web developer at hoping mind
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{value.data.name}</li>
              <li class="list-group-item">{value.data.qualification}</li>
              <li class="list-group-item">{value.data.college}</li>
            </ul>
          </div>
        </div>
      )}
    </PackageContext.Consumer>
  );
};
export default Home;
