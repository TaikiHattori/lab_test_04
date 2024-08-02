//rafceと入力後タブキーを押す

import React from 'react';

//↓分割代入という書き方
const Test = ({gs,lab,react}) => {
    return (
        <>
            <div>Test</div>
            <p>{gs}</p>
            <h2>{lab}</h2>
            <h3>{react}</h3>
        </>
    );
};

export default Test