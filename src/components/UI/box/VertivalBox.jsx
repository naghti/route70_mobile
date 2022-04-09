import React from 'react';

const VertivalBox = ({children,...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

export default VertivalBox;