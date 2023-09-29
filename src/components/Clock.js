import { useState, useEffect } from 'react';
import './Clock.css';
import Digit from './Digit';
import Divider from './Divider';

export default function Clock({date}) {
    const [time, setTime] = useState(new Date());

    function pad(num, size) {
        num = num.toString(8);
        while (num.length < size) num = "0" + num;
        return num;
    }

    useEffect(() => {
        const interval = setInterval(() => { setTime(new Date()); }, 1000);

        return () => clearInterval(interval);
    }, []);

    var hrs1 = time.getHours() / 10;
    var hrs2 = time.getHours() % 10;
    var min1 = time.getMinutes() / 10;
    var min2 = time.getMinutes() % 10;
    var sec1 = time.getSeconds() / 10;
    var sec2 = time.getSeconds() % 10;

    return (
        <div className='clock'>
            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={hrs1} maxNumber={2} />
                    <Digit number={hrs2} maxNumber={9} />
                </div>
                <h2>{pad(time.getHours(), 2)}</h2>
            </div>

            <Divider />

            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={min1} maxNumber={2} />
                    <Digit number={min2} maxNumber={9} />
                </div>
                <h2>{pad(time.getMinutes(), 2)}</h2>
            </div>
            
            <Divider />
            
            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={sec1} maxNumber={2} />
                    <Digit number={sec2} maxNumber={9} />
                </div>
                <h2>{pad(time.getSeconds(), 2)}</h2>
            </div>
        </div>
    );
  }