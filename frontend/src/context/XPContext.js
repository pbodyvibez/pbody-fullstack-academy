import { createContext, useContext, useState } from "react";

const XPContext = createContext();

export function XPProvider({ children }) {

  const [xp, setXP] = useState(320);

  const [level, setLevel] = useState(4);

  const [streak, setStreak] = useState(17);

  const addXP = (amount) => {

    const total = xp + amount;

    setXP(total);

    if (total >= 7500) setLevel(10);
    else if (total >= 5000) setLevel(9);
    else if (total >= 3500) setLevel(8);
    else if (total >= 2300) setLevel(7);
    else if (total >= 1500) setLevel(6);
    else if (total >= 900) setLevel(5);
    else if (total >= 500) setLevel(4);
    else if (total >= 250) setLevel(3);
    else if (total >= 100) setLevel(2);
    else setLevel(1);

  };

  return (

    <XPContext.Provider

      value={{

        xp,

        level,

        streak,

        addXP,

        setStreak

      }}

    >

      {children}

    </XPContext.Provider>

  );

}

export const useXP = () => useContext(XPContext);