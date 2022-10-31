import React from 'react';

const Sign = ({value,saveSign,sign,saveValue}) => {
    const signs = ['+','-','*','/','C']
    return (
        <div>
            {
            sign === signs.at(value) 
            ? <button style={{backgroundColor: 'brown'}} onClick={() => saveSign(signs.at(value))}>{signs.at(value)}</button>
            : <button onClick={() => sign.at(value) === 'C' ? saveValue(0) : saveSign(signs.at(value))}>{signs.at(value)}</button>
            }
            
        </div>
    );
};

export default Sign;