import React from "react";

const Context = React.createContext<ProjectName>({
  state: "sano",
  setState(state: string) {},
});

const Provider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState<string>("sano");

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export { Context, Provider };
