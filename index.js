const element = (
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="profile-image"
        />
        <p className="para1">Kiran V</p>
        <p className="para2">
          Vishnu Institute of Computer Education and Technology,Bhimavaram
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="watch-image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
