import React from "react";
import Spinner from 'react-bootstrap/Spinner';

function BorderExample() {
  return (
    <div style={{ width:"100%", height:"80vh", display:"flex", alignItems: "center", marginTop: "2rem",justifyContent:"center" }}>
      <Spinner animation="border" role="status" />
    </div>
  );
}
export default BorderExample;