const guest = ({ next, store }) => {
  if (store.getters.auth.loggedIn) {
    return next({
      name: "Dashboard",
    });
  }

  return next();
};

export default guest;
