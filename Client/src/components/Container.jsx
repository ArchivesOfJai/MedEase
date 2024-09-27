import React from "react";


const defaultSx = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "auto 20px",
};
function Container({ children, className,sx={},...props }) {
  return (
    <div className={className} style={{...defaultSx,...sx}} {...props}>
      {children}
    </div>
  );
}

export default Container;
