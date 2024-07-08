import "./project.scss"
function Project() {
  const allProject = [
    {
      img: "https://plus.unsplash.com/premium_photo-1717437910344-c7cac52d264f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id: 1,
      name: "project 1",
      tech:["REact ","tailwind css","jsvascript"]
    },{}
  ]
  return (
    <div className="projects">
      <div className="project">
        <div className="img-container">image</div>
        <div className="project-detail">Project detail</div>
      </div>
    </div>
  )
}

export default Project
