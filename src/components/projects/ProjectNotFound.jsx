import { Link } from "react-router-dom";
import projecterror from "/assets/projects/projecterror.png";

function ProjectNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 px-8">
      <img src={projecterror} className="w-[33rem]" alt="error image" />
      <Link to="/" className="btn w-56">
        Go back
      </Link>
    </div>
  );
}

export default ProjectNotFound;
