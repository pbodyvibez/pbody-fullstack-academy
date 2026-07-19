import { createContext, useContext, useState, useEffect } from "react";
import studentData from "../data/studentData";

const UserEngineContext = createContext();

export function UserEngineProvider({ children }) {

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || studentData;
  });

  // Save user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // DAILY LOGIN STREAK SYSTEM
  const updateStreak = () => {

    const today = new Date().toDateString();
  const lastLogin = user.lastLogin || "";

    if (lastLogin !== today) {

      setUser((prev) => {

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const isConsecutive =
          lastLogin === yesterday.toDateString();

        return {
          ...prev,
          streak: isConsecutive ? prev.streak + 1 : 1,
          lastLogin: today
        };

      });

    }

  };

  // XP SYSTEM
  const addXP = (amount) => {

    setUser((prev) => {

      const newXP = prev.xp + amount;

      let level = prev.level;
      let nextLevelXP = prev.nextLevelXP;

      while (newXP >= nextLevelXP) {
        level++;
        nextLevelXP += 1000;
      }

      return {
        ...prev,
        xp: newXP,
        level,
        nextLevelXP
      };

    });

  };

  // COMPLETE ACTIONS
  const completeLesson = (xp) => {
    addXP(xp);
    updateStreak();
  };

  const completeQuiz = () => {
    addXP(100);
    updateStreak();
  };

  const completeMission = (xp) => {
    addXP(xp);
    updateStreak();
  };

  return (
    <UserEngineContext.Provider
      value={{
        user,
        addXP,
        completeLesson,
        completeQuiz,
        completeMission,
        updateStreak
      }}
    >
      {children}
    </UserEngineContext.Provider>
  );

}

export function useUserEngine() {
  return useContext(UserEngineContext);
}