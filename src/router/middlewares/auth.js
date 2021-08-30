const auth = ({ next, store }) => {
  console.log(2222);
  if (!store.getters.auth.loggedIn) {
    return next({
      name: "Login",
    });
  }

  return next();
};

export default auth;
