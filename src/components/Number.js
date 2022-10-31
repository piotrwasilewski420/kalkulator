import React from 'react';

const Number = ({value,saveValue,sign}) => {
    return (
        <div>
            <button onClick={() => {
                if(sign === '+') saveValue(number => number + value);
                if(sign === '-') saveValue(number => number - value);
                if(sign === '*') saveValue(number => number * value);
                if(sign === '/') saveValue(number => number / value);
                
            }}>{value}</button>
        </div> 
    );
};

export default Number;