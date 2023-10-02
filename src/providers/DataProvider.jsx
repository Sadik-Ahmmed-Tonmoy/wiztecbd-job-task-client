import React, { createContext, useState } from 'react';

export const DataContext = createContext(null) 

const DataProvider = ({children}) => {
    const [refetch, setRefetch] = useState(false);

    const allInfo = {refetch, setRefetch}
    return (
        <DataContext.Provider value={allInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;