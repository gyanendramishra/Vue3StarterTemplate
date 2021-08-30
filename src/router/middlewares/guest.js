const guest = ({ next, store }) => {
  console.log(111);
  if (store.getters.auth.loggedIn) {
    return next({
      name: "Dashboard",
    });
  }

  return next();
};

export default guest;
