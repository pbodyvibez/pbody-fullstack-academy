import { createContext, useContext, useState, useEffect } from "react";

const DailyMissionContext = createContext();

export function DailyMissionProvider({ children }) {

  const [missions, setMissions] = useState(() => {
    const saved = localStorage.getItem("dailyMissions");
    return saved ? JSON.parse(saved) : {};
  });

  const todayKey = new Date().toDateString();

  // Reset daily missions every new day
  useEffect(() => {

    const storedDate = localStorage.getItem("missionDate");

    if (storedDate !== todayKey) {

      setMissions({});
      localStorage.setItem("missionDate", todayKey);

    }

  }, [todayKey]);

  useEffect(() => {
    localStorage.setItem("dailyMissions", JSON.stringify(missions));
  }, [missions]);

  // Complete mission
  const completeMission = (missionId, xp) => {

    setMissions((prev) => {

      if (prev[missionId]) return prev;

      return {
        ...prev,
        [missionId]: {
          completed: true,
          xp
        }
      };

    });

  };

  // Check if completed
  const isCompleted = (missionId) => {
    return !!missions[missionId]?.completed;
  };

  // Get total daily XP
  const getDailyXP = () => {
    return Object.values(missions).reduce(
      (sum, m) => sum + (m.xp || 0),
      0
    );
  };

  return (
    <DailyMissionContext.Provider
      value={{
        missions,
        completeMission,
        isCompleted,
        getDailyXP
      }}
    >
      {children}
    </DailyMissionContext.Provider>
  );

}

export function useDailyMissions() {
  return useContext(DailyMissionContext);
}