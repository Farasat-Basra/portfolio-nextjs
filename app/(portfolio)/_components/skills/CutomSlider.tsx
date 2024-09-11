// Example data: List of programming skills with icons and names
const skills = [
  { name: "React", icon: "🔵" },
  { name: "Vue.js", icon: "🟢" },
  { name: "Angular", icon: "🔴" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
];

const CustomSlider = () => {
  return (
    <div className="slider">
      <div className="slider-track mt-10 ">
        {skills.map((skill, index) => (
          <div className="slide" key={index}>
            <div className="card">
              <div className="icon">{skill.icon}</div>
              <div className="name">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
