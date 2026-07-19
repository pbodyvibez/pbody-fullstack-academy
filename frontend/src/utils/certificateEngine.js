import certificateRequirements from "../data/certificateRequirements";

export function checkCertificateEligibility(courseId, progress) {

  const requirements = certificateRequirements[courseId];

  if (!requirements) {

    return false;

  }

  const completedLessons =
    progress.completedLessons.filter(id =>
      typeof id === "number"
    ).length;

  const completedAssignments =
    progress.completedLessons.filter(id =>
      String(id).includes("assignment")
    ).length;

  const completedProjects =
    progress.completedLessons.filter(id =>
      String(id).includes("project")
    ).length;

  return (

    completedLessons >= requirements.lessons &&

    completedAssignments >= requirements.assignments &&

    completedProjects >= requirements.projects

  );

}