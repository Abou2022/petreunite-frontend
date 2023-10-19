import { useState } from "react";

import React from "react";

export const useToken = () => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage;
  });
  return <div>useToken</div>;
};
