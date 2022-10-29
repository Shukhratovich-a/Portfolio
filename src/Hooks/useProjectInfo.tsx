import projectsInfo from "../Datas/ProjectInfos";
import useProjectModal from "./useProjectName";

const useProjectInfo = (): ProjectInfo => {
  const [projectName] = useProjectModal();

  return projectsInfo[projectName];
};

export default useProjectInfo;
