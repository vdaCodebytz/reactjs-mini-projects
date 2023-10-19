import useFetchData from "./config";

const Projects = () => {
  const { isLoading, data } = useFetchData();

  if (isLoading) {
    return <h5>Loading</h5>;
  }

  console.log(data);
  return (
    <section className="projects">
      <div className="projects-center">
        {data.map((project) => {
          return (
            <div
              className="project"
              onClick={() => {
                window.location.href = project.fields.url;
              }}
              key={project.fields.title}
            >
              <img
                className="img"
                src={project.fields.image.fields.file.url}
                alt=""
              />
              <h5>{project.fields.title}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
