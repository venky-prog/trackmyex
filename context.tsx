import React, {
  createContext,
  useContext,
} from "react";



type ContextType = {
  isAuthenticated: boolean;
  token: string | null;
};

type ContextTypeSetter = {
  setContext: React.Dispatch<React.SetStateAction<ContextType>>;
}

export const SessionContext = createContext<ContextType & ContextTypeSetter>({
  isAuthenticated: false,
  token: null,
  setContext: () => {},
});

export const useSession = () => {
  const { isAuthenticated, setContext, token } =
    useContext(SessionContext);
  return { isAuthenticated, setContext, token };
};

export const SessionContextProvider = (props: {
  children: React.ReactNode;
  value: ContextType & ContextTypeSetter;
}) => {
  return (
    <SessionContext.Provider value={props.value}>
      {props.children}
    </SessionContext.Provider>
  );
};
