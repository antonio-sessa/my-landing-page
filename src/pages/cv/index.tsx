import React from "react";

const CVPath = "/media/antoniosessa_CV.pdf";

const CVPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <object data={CVPath} type="application/pdf" width="100%" height="100%">
        <p>
          Your browser does not support viewing PDFs. Please{" "}
          <a href={CVPath} download>
            download the CV
          </a>{" "}
          to view it.
        </p>
      </object>
    </div>
  );
};

export default CVPage;
