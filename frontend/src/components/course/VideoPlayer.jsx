// =====================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// VIDEO PLAYER
// FULL REPLACEMENT
// =====================================================

import "./course.css";

export default function VideoPlayer({ lesson }) {
  if (!lesson) {
    return (
      <section className="videoSection">
        <div className="videoHeader">
          <span className="videoBadge">
            PBODY FULLSTACK ACADEMY • PREMIUM CLASSROOM
          </span>

          <h1>Select A Lesson</h1>

          <p>
            Choose a lesson from the course curriculum to begin
            your engineering learning experience.
          </p>
        </div>

        <div className="videoPlayer">
          <div className="videoEmpty">
            <div className="emptyPlay">▶</div>

            <h2>Select a lesson to begin</h2>

            <p>
              Choose any lesson from the course sidebar to begin
              your premium learning experience.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // VIDEO SOURCE
  // =====================================================

  let videoSource = "";

  if (lesson.videoId) {
    videoSource = `https://www.youtube.com/embed/${lesson.videoId}`;
  } else if (lesson.video) {
    if (
      typeof lesson.video === "string" &&
      (lesson.video.startsWith("http://") ||
        lesson.video.startsWith("https://"))
    ) {
      videoSource = lesson.video;
    } else if (typeof lesson.video === "string") {
      videoSource = `https://www.youtube.com/embed/${lesson.video}`;
    }
  } else if (lesson.videoUrl) {
    videoSource = lesson.videoUrl;
  }

  // =====================================================
  // NORMALIZE DATA
  // =====================================================

  const objectives = Array.isArray(lesson.objectives)
    ? lesson.objectives
    : [];

  const resources = Array.isArray(lesson.resources)
    ? lesson.resources
    : [];

  const level =
    lesson.level ||
    lesson.difficulty ||
    "Beginner";

  const category =
    lesson.category ||
    "Engineering";

  const xp =
    lesson.xp || 0;

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="videoSection">

      <div className="videoHeader">

        <span className="videoBadge">
          PBODY FULLSTACK ACADEMY • PREMIUM ENGINEERING CLASSROOM
        </span>

        <h1>
          {lesson.title}
        </h1>

        <p>
          {lesson.description ||
            "Continue your engineering training through this professional lesson."}
        </p>

      </div>

      <div className="videoPlayer">

        {videoSource ? (
          <iframe
            key={videoSource}
            src={videoSource}
            title={lesson.title || "PBody Engineering Lesson"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="videoPlaceholder">

            <div className="playIcon">
              ▶
            </div>

            <h2>
              Video Coming Soon
            </h2>

            <p>
              This lesson has been published and the
              accompanying engineering video is currently
              being prepared.
            </p>

          </div>
        )}

      </div>

      <div className="lessonDescription">

        <h2>
          About This Lesson
        </h2>

        <p>
          {lesson.description ||
            "This professional engineering lesson is designed to build practical development skills."}
        </p>

        <div className="courseMeta">

          <span>
            ⏱ {lesson.duration || "Self Paced"}
          </span>

          <span>
            📚 {level}
          </span>

          <span>
            💻 {category}
          </span>

          <span>
            🏆 {xp} XP
          </span>

        </div>

        <div className="lessonObjectivesSection">

          <h2>
            🎯 What You Will Learn
          </h2>

          {objectives.length > 0 ? (
            <ul className="lessonObjectives">

              {objectives.map((objective, index) => (
                <li key={index}>

                  <span className="objectiveCheck">
                    ✓
                  </span>

                  <span>
                    {typeof objective === "object"
                      ? objective.title ||
                        objective.name ||
                        objective.text ||
                        JSON.stringify(objective)
                      : objective}
                  </span>

                </li>
              ))}

            </ul>
          ) : (
            <p className="lessonEmptyText">
              Learning objectives for this lesson
              will be displayed here.
            </p>
          )}

        </div>

        <div className="lessonResourcesSection">

          <h2>
            📚 Engineering Resources
          </h2>

          {resources.length > 0 ? (
            <div className="lessonResourceList">

              {resources.map((resource, index) => {

                if (typeof resource === "string") {
                  return (
                    <div
                      key={index}
                      className="lessonResourceItem"
                    >

                      <span className="resourceIcon">
                        📦
                      </span>

                      <span>
                        {resource}
                      </span>

                    </div>
                  );
                }

                if (
                  resource &&
                  typeof resource === "object"
                ) {
                  const resourceTitle =
                    resource.title ||
                    resource.name ||
                    resource.label ||
                    "Engineering Resource";

                  const resourceUrl =
                    resource.url ||
                    resource.link ||
                    "";

                  return (
                    <div
                      key={index}
                      className="lessonResourceItem"
                    >

                      <div className="resourceInformation">

                        <span className="resourceIcon">
                          📦
                        </span>

                        <div>

                          <strong>
                            {resourceTitle}
                          </strong>

                          {resource.type && (
                            <small>
                              {resource.type}
                            </small>
                          )}

                        </div>

                      </div>

                      {resourceUrl ? (
                        <a
                          href={resourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="courseBackButton"
                        >
                          Open
                        </a>
                      ) : (
                        <span className="resourceUnavailable">
                          Available in lesson
                        </span>
                      )}

                    </div>
                  );
                }

                return null;
              })}

            </div>
          ) : (
            <div className="lessonResourceItem">

              <span className="resourceIcon">
                📦
              </span>

              <span>
                Engineering resources will be added
                to this lesson.
              </span>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}