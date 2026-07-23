import { createContext, useState } from "react";

export const ComplaintContext = createContext();

export function ComplaintProvider({ children }) {
  const [complaint, setComplaint] = useState({});

  return (
    <ComplaintContext.Provider
      value={{ complaint, setComplaint }}
    >
      {children}
    </ComplaintContext.Provider>
  );
}