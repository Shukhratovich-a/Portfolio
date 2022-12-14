import React from "react";

import { Context } from "../Context/ProjectModal";

const useProjectModal = (): [boolean, (state: boolean) => void] => {
  const ctx: ProjectModal = React.useContext(Context);

  return [ctx.state, ctx.setState];
};

export default useProjectModal;
