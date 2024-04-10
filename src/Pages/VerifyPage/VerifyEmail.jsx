import React from "react";

const VerifyEmail = () => {
  return (
    <div className="main">
      <div className="nav">
        <div>
          <img src={dribbleLogo} alt="" className="logo" />
        </div>
      </div>
      <div className="body">
        <div className="form-check cardColletion">
          {data && data.map((set, i) => <Card key={i} value={set} />)}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
