import React, { useContext } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Member from "../../components/Member/Member";
import PhotoGallery from "../../components/PhoteGallery/PhotoGallery";
import profile from "../../assets/profile.png";
import { dataContext } from "../../data/Data";
import joint_sports_officer from "../../assets/officers/joint_sports_officer.png";
import president from "../../assets/officers/president.png";
import sports_officer from "../../assets/officers/sports_officer.png";
import general_secretary from "../../assets/officers/general_secretary.png";
import deputy_general_secretary from "../../assets/officers/deputy_general_secretary.png";
const About = () => {
  const { team_members } = useContext(dataContext);

  const administrativeTeam =  [
    { name: "Dr. Rekha Sati Deoli", post: "Joint Sports Officer", image: joint_sports_officer },
    { name: "Prof. Punit Sharma", post: "President", image: president },
    { name: " Dr. Deepak Negi", post: "Sports Officer", image: sports_officer },
  ]

  const topTeam = [
    { name: "Kushal", post: "General Secretary", image: general_secretary },
    { name: "Harshit Chaudhary", post: "Deputy General Secretary", image: deputy_general_secretary },
  ]

  return (
    <div className="about-main-container">
      <div className="about">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-page-content">
        <h1>Who We Are</h1>
        <p>
          We turn novices into champions here at IIT Delhi grounds. The best
          facilities provided by us have led to great results and our presence
          is now being felt in the Delhi circles as well as in the inter college
          meets outside. As an organisation we are a group of around 300 people
          including players, coaches, trainers and administrative staff who are
          working to take our sporting standards at par with the best in the
          business. Apart from being the apex body for sports in IITD, we are
          involved in a number of social events, informal events, hosting of
          sports tournaments and other collaborations and therefore the number
          of people involved with BSA is huge.
          <br/><br/>From an Institution known
          worldwide for its academic prowess, we have produced national level
          players by our excellent facilities and great sporting culture and
          have emerged as a sporting powerhouse. More importantly, BSA promotes
          sports amongst the people not interested(Students, Professors and the
          residents of the campus) in playing sports competitively to cater to
          their fitness needs in the campus too as we believe that a healthy
          mind resides in a healthy body.
        </p>
      </div>
      <div className="our-team">
        <h1>ADMINISTRATIVE TEAM</h1>
        <div className="team-members">
          {administrativeTeam.map((member, index) => (
            <Member player={member} key={index} />
          ))}
        </div>
      </div>
      <div className="our-team">
        <h1>STUDENTS TEAM</h1>
        <div className="team-members">
          {topTeam.map((member, index) => (
            <Member player={member} key={index} />
          ))}
        </div>
        <div className="team-members">
          {team_members.map((member, index) => (
            <Member player={member} key={index} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default About;
