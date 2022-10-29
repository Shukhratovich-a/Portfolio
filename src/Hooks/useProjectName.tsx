import React from "react";

import { Context } from "../Context/ProjectName";

const useProjectName = (): [string, (state: string) => void] => {
  const ctx: ProjectName = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useProjectName;
