const auth = ({ next, store }) => {
  if (!store.getters.auth.loggedIn) {
    return next({
      name: "Login",
    });
  }

  return next();
};

export default auth;
