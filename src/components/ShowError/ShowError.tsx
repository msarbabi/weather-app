import React from "react";


const ShowError = ({error}: any) => {
  return <p className="pt-5">{error}</p>
}

export default React.memo(ShowError);