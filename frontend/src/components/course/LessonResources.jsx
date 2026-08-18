import React from "react";

import "./course.css";

export default function LessonResources({ lesson }) {
  if (!lesson) {
    return null;
  }

  const resources = Array.isArray(lesson.resources)
    ? lesson.resources
    : [];

  return (
    <section className="lessonResources">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="lessonResourcesHeader">

        <div className="lessonResourcesIcon">
          📂
        </div>

        <div>
          <span className="resourceEyebrow">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>Engineering Resources</h2>

          <p>
            Everything you need to master this engineering lesson.
          </p>
        </div>

      </div>


      {/* =========================================
          RESOURCE LIST
      ========================================= */}

      {resources.length > 0 ? (

        <div className="resourceList">

          {resources.map((resource, index) => {

            // -------------------------------------
            // SUPPORT STRING RESOURCES
            // -------------------------------------

            if (typeof resource === "string") {
              return (
                <a
                  key={index}
                  href="#"
                  className="resourceItem"
                  onClick={(event) => event.preventDefault()}
                >

                  <div className="resourceItemIcon">
                    📄
                  </div>

                  <div className="resourceItemContent">

                    <strong>
                      {resource}
                    </strong>

                    <span>
                      Learning material provided by PBody
                      FullStack Academy.
                    </span>

                  </div>

                  <span className="resourceArrow">
                    →
                  </span>

                </a>
              );
            }


            // -------------------------------------
            // SUPPORT OBJECT RESOURCES
            // -------------------------------------

            if (
              resource &&
              typeof resource === "object"
            ) {
              const title =
                resource.title ||
                resource.name ||
                resource.label ||
                `Resource ${index + 1}`;

              const description =
                resource.description ||
                "Engineering learning material provided by PBody FullStack Academy.";

              const url =
                resource.url ||
                resource.link ||
                resource.href ||
                "#";

              const hasUrl = url !== "#";

              return (
                <a
                  key={index}
                  href={url}
                  target={hasUrl ? "_blank" : undefined}
                  rel={
                    hasUrl
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="resourceItem"
                  onClick={
                    hasUrl
                      ? undefined
                      : (event) =>
                          event.preventDefault()
                  }
                >

                  <div className="resourceItemIcon">
                    📄
                  </div>

                  <div className="resourceItemContent">

                    <strong>
                      {title}
                    </strong>

                    <span>
                      {description}
                    </span>

                    {resource.type && (
                      <small>
                        {resource.type}
                      </small>
                    )}

                  </div>

                  <span className="resourceArrow">
                    →
                  </span>

                </a>
              );
            }


            return null;
          })}

        </div>

      ) : (

        /* =========================================
           EMPTY RESOURCE STATE
        ========================================= */

        <div className="resourcesEmpty">

          <div className="resourcesEmptyIcon">
            📚
          </div>

          <h3>
            Resources Coming Soon
          </h3>

          <p>
            Additional lesson materials, code examples,
            practice files and downloads will be added
            to this engineering lesson.
          </p>

        </div>

      )}

    </section>
  );
}