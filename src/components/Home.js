import React from "react";

function Home() {
  return (
    <div class="container">
      <div className="mb-3">
      <h2>Edit your text</h2>
      <textarea className="form-control my-3"   id = "myBox" rows={8} ></textarea>
      </div>
    </div>
  );
}

export default Home;
