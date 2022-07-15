import React from "react";
import './Instructors.css';

const Instructors = () =>{
    const instructorInfo = [{
        instructorName: 'Victor Silva',
        instructorTitle:'Founder, Silva Tennis Academy',
        instructorBio:'Started playing in Sao Paolo, Brazil, coached by his father, Edson.He has played tennis since he was five years old and started to compete seriously at 12. He won 10 national tournaments in Brazil and more than 50 titles in the Brazilian Tennis Federation. He turned pro at 16 and earned his first ATP point shortly thereafter. Victor came to California at 17 years of age, played at Wilson High School in Long Beach,then two years of college at Long Beach State. Victor started Silva Tennis Academy in 2020.',
        instructorImage: require("../images/silva.jpg")
    },
    {
        instructorName:'Tem Sykahua',
        instructorTitle:'Founder, Tems Amazing Tennis',
        instructorBio:'Tem Sykahua is a former Men’s Open Champion. He has won many tournaments that include: Men’s Open, NTRP 5.5, Junior College, College Division 3, Junior Open and Satellite, Masters, etc. With over 30 years of playing experience, Tem has worked with top level coaches and athletes to share his knowledge of the game. He is a current member of the United States Professional Tennis Association. Tem is also an inductee to Lakewood’s Hall of Fame for his new found success on students winning tournaments.',
        instructorImage: require("../images/tem.jpg")
    },
    {
        instructorName:'Kirk Wilson',
        instructorTitle:'Contact Number: (562) 477- 6241',
        instructorBio: 'Has 35+ years of teaching experience. Coaches all levels. Serious students only.',
        
    }]

    return (
        <>
        <p style = {{textAlign: "center",fontWeight:'bold', fontSize: 30}}>Instructors</p>
        <div className="instructor">
            
            {
                instructorInfo.map( (info) =>(

                    <div className="instructor-desc">
                        
                            {info.hasOwnProperty('instructorImage')?<img className = "instructor-photo" src = {info.instructorImage}/>:null}
                        
                        <p className = "instructor-name">{info.instructorName}</p>
                        <p className = "instructor-title">{info.instructorTitle}</p>
                        <p className = "instructor-bio">{info.instructorBio}</p>

                    </div>
                )
                )
            }
        </div>

        </>
    )
};

export default Instructors;