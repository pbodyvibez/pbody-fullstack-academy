export function updateDailyStreak(user) {

  const today = new Date().toDateString();

  const lastLogin = user.lastLogin || "";

  let streak = user.streak || 0;

  if (lastLogin === today) {

    return {

      ...user

    };

  }

  const yesterday = new Date();

  yesterday.setDate(yesterday.getDate() - 1);

  if (lastLogin === yesterday.toDateString()) {

    streak += 1;

  } else {

    streak = 1;

  }

  return {

    ...user,

    streak,

    lastLogin: today

  };

}