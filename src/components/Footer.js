import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "black",
        padding: "5rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="display-4">Broad India</div>
      <div className="btn btn-light" onClick={() => window.scrollTo(0, 0)}>
        Back to Top
      </div>
    </div>
  );
}
