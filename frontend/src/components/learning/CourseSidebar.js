import "../../styles/coursePlayer.css";

export default function CourseSidebar({

  lessons = [],

  currentLesson,

  completedLessons = [],

  setCurrentLesson

}) {

  return (

    <div className="course-sidebar">

      <h2>📚 Course Content</h2>

      {

        lessons.map((lesson,index)=>{

          const completed =

            Array.isArray(completedLessons)

              ? completedLessons.includes(lesson.id)

              : false;

          const active =

            currentLesson?.id === lesson.id;

          return(

            <div

              key={lesson.id}

              className={`lesson-item ${active ? "active" : ""}`}

              onClick={()=>setCurrentLesson(lesson)}

            >

              <div

                style={{

                  width:"40px",

                  textAlign:"center",

                  fontSize:"22px"

                }}

              >

                {

                  completed

                    ? "✅"

                    : index+1

                }

              </div>

              <div style={{flex:1}}>

                <h4>

                  {lesson.title}

                </h4>

                <small>

                  ⏱ {lesson.duration}

                </small>

                <br/>

                <small>

                  ⭐ {lesson.xp} XP

                </small>

              </div>

            </div>

          );

        })

      }

    </div>

  );

}