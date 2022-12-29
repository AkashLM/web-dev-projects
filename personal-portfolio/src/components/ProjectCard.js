import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectLink}>
      <div className="proj-imgbx" style={{cursor:"pointer", textDecoration:"none"}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style={{color:"white"}}>{title}</h4>
          <span style={{color:"gray"}}>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
