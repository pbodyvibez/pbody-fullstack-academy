// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// LESSON NOTES
// FULL REPLACEMENT
// ===============================================

import "./course.css";

export default function LessonNotes({ lesson }) {
  // =================================================
  // NO LESSON
  // =================================================

  if (!lesson) {
    return null;
  }

  // =================================================
  // NORMALIZE NOTES
  // SUPPORTS STRING / ARRAY / OBJECT NOTES
  // =================================================

  const notes = Array.isArray(lesson.notes)
    ? lesson.notes
    : [];

  // =================================================
  // EMPTY NOTES STATE
  // =================================================

  if (notes.length === 0) {
    return (
      <section className="lessonNotes">

        <div className="lessonNotesHeader">

          <div className="lessonNotesIcon">
            📝
          </div>

          <div>

            <span className="notesEyebrow">
              PBODY FULLSTACK ACADEMY
            </span>

            <h2>
              Engineering Notes
            </h2>

            <p>
              Capture and review the important concepts
              from this engineering lesson.
            </p>

          </div>

        </div>


        <div className="notesEmptyState">

          <div className="notesEmptyIcon">
            📖
          </div>

          <h3>
            Notes Coming Soon
          </h3>

          <p>
            Important concepts, engineering principles
            and lesson notes will be added as the
            curriculum develops.
          </p>

        </div>

      </section>
    );
  }

  // =================================================
  // NOTES AVAILABLE
  // =================================================

  return (
    <section className="lessonNotes">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="lessonNotesHeader">

        <div className="lessonNotesIcon">
          📝
        </div>

        <div>

          <span className="notesEyebrow">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>
            Engineering Notes
          </h2>

          <p>
            Important concepts from this lesson.
          </p>

        </div>

      </div>


      {/* =========================================
          NOTES LIST
      ========================================= */}

      <div className="notesList">

        {notes.map((note, index) => {

          let noteContent = note;

          if (
            note &&
            typeof note === "object"
          ) {
            noteContent =
              note.text ||
              note.content ||
              note.description ||
              note.title ||
              JSON.stringify(note);
          }

          return (
            <div
              className="noteItem"
              key={index}
            >

              <div className="noteNumber">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="noteContent">

                <strong>
                  Key Concept {index + 1}
                </strong>

                <p>
                  {noteContent}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}