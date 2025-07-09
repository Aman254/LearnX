const ROUTES = {
  BROWSE: "/",
  SIGN_IN: "/singn-in",
  SING_UP: "singn-up",
  PROFILE: (id: string) => `/profile/${id}`,
};

export default ROUTES;
