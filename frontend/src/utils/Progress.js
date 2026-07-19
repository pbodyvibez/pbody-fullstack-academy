export const saveProgress = (courseId, data) => {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};

  progress[courseId] = {
    ...progress[courseId],
    ...data,
  };

  localStorage.setItem("progress", JSON.stringify(progress));
};

export const getProgress = (courseId) => {
  const progress = JSON.parse(localStorage.getItem("progress")) || {};
  return progress[courseId] || {};
};

export const getAllProgress = () => {
  return JSON.parse(localStorage.getItem("progress")) || {};
};