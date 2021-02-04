import { set } from 'core-js/fn/dict';
import React, { useState, createContext, useContext } from 'react';

export const SourceContext = createContext();
export const SourceProvider = props => {
    const [source, setSource] = useState();
    return <SourceContext.Provider value={[source, setSource]} {...props}></SourceContext.Provider>
}
export const useSourceStore = () => useContext(SourceContext)