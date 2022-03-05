import React from "react";

export let data = {
    number: 1328,
    text: 'Context API...',
}

const DataContext  = React.createContext(data);

export default DataContext;