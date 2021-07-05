import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import {connect} from "react-redux";
import Title from "../components/Title";

const Portfolio = (props) => {
  const {container, isOpen, skills} = props;
  return (
    <Layout
      title="Skill"
      className={`${
        isOpen ? "sm:ml-60 xl:ml-72" : "sm:ml-0"
      } min-h-screen relative transition-all duration-300`}
    >
      <Sidebar />
      <div className={`${container} sm:pb-32`}>
        <Title title="My Skill"/>
        <div>
          <ul className="sm:pl-10 list-disc text-base md:text-2xl lg:text-4xl rubik grid gap-x-16 md:gap-x-0 grid-cols-2">
            {skills.map((skill) => {
              return (
                <li key={skill.id} className="uppercase mt-5">
                  {skill.skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.sidebarIsOpen,
  container: state.root.containerClass,
  skills: state.skill.skills,
});

export default connect(mapStateToProps, null)(Portfolio);
