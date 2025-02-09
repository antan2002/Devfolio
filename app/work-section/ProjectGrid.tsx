import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
     
        <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        <AnimatedWords2
          title={"My Projects"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,9vw,155.04px)]`}
        />
        <AnimatedBody
                  text=""
                  className="w-[90%] text-center text-[14px] font-semibold  sm:w-[500px] md:w-[550px] md:text-[16.5px]"
                />
          {devProjects.map((project: ProjectProps) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
              available={project.available}
            />
          ))}
        </div>
     
    </>
  );
};

export default ProjectGrid;
