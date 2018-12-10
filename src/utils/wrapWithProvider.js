import React from "react";
import { Provider } from "mobx-react";

// HOC to help with test case to inject mock store
export default stores => component => {
  return <Provider {...stores}>{component}</Provider>;
};