import React, { createContext, useContext, useMemo, useState, } from 'react';
import { AuthContext } from './AuthProvider';
import useFirestore from '../hooks/useFirestore';

export const AppContext = createContext();

function AppProvider({ children }) {
  const [openCreateRoom, setOpenCreateRoom] = useState(false);

  const { user: { uid } } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid
    };
  }, [uid]);

  const rooms = useFirestore('rooms', roomsCondition);

  return (
    <AppContext.Provider value={{ rooms, openCreateRoom, setOpenCreateRoom }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;