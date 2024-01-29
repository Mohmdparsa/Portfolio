import { useState, useEffect } from "react";
import Skill from "./Skill";
import { devSkill } from "../../Constans/Skill";
const Skills = ()=>{
  const { htmlSkill, cssSkill, jsSkill, reactSkill } = devSkill;
  const [javascript, setJavascript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [react, setReact] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavascript((oldProgress) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + diff, 50);
      });
      setHtml((oldProgress) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + diff, 90);
      });
      setCss((oldProgress) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + diff, 87);
      });
      setReact((oldProgress) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + diff, 50);
      });

      return () => {
        clearInterval(timer);
      };
    }, 200);
  }, []);
    return(
        <>
         <Skill name={htmlSkill.name} icon={htmlSkill.icon} value={html} />
              <Skill name={cssSkill.name} icon={cssSkill.icon} value={css} />
              <Skill
                name={jsSkill.name}
                icon={jsSkill.icon}
                value={javascript}
              />
              <Skill
                name={reactSkill.name}
                icon={reactSkill.icon}
                value={react}
              />
        
        </>
    )
}

export default Skills