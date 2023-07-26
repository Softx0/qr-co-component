import React from "react";

const Home = () => {
  const QRComponent = () => {
    console.log("QR Component");
  };

  return (
    <div>
      <h1>QR Code Component</h1>
      <button onClick={QRComponent}>QR Component</button>
    </div>
  );
};

export default Home;
