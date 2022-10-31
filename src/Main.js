import React, {useEffect, useState} from 'react';
import Number from './components/Number';
import Sign from './components/Sign';
import './Main.css';

const Main = () => {
    const [number,setNumber] = useState(0);
    const [sign, setSign] = useState('');
    useEffect(() => {
        console.log(number);
    },[number])
    return (
        <div className='grid'>
            {[...Array(10).keys()].map(n => <Number
            sign={sign} 
            saveValue={setNumber} 
            key={n} 
            value={n}/>)}
            {[...Array(5).keys()].map(n => <Sign
            key={n}
            saveValue={setNumber}
            sign={sign}
            saveSign={setSign}
            value={n}
            />)}
            <div style={{marginTop: '50px'}}>{number}</div>
        </div>
    );
};

export default Main;