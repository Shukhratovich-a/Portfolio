import projectsInfo from "../Datas/ProjectInfos";

import useProjectName from "./useProjectName";

const useProjectInfo = (): ProjectInfo => {
  const [projectName] = useProjectName();

  return projectsInfo[projectName];
};

export default useProjectInfo;
