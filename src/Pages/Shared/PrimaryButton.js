import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">
            {children}
          </button>
        </div>
    );
};

export default PrimaryButton;