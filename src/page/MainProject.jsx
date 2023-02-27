import ProjectItem from "../component/ProjectItem";
import { Box } from "../styled/Pages";

function MainProject() {
    return (
        <Box>
            프로젝트 나열(주요 프로젝트)
            블로그 형식으로 어떤 부분을 배웠는지, 해결했는지 자세히 작성하는 detail 부분 만들기
            <ProjectItem />
            <ProjectItem />
        </Box>
    );
}

export default MainProject;