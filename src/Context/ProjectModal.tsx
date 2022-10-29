import React from "react";

const Context = React.createContext({ state: false, setState: (state: boolean) => {} });

const Provider: React.FC<Props> = ({ children }) => {
  const [state, setState] = React.useState<boolean>(false);

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
};

export { Context, Provider };
