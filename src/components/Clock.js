import { useState, useEffect } from 'react';
import './Clock.css';
import Digit from './Digit';
import Divider from './Divider';

const decimalDigitsVisibleStyle = {
    opacity: '1',
    transition: '1s, all 1s'
};

const decimalDigitsInvisibleStyle = {
    opacity: '0',
    transition: '1s, all 1s'
}

export default function Clock({date}) {
    const [time, setTime] = useState(new Date());
    const [showTime, setShowTime] = useState(false);
    const [lightDivider, setLightDivider] = useState(false);

    function pad(num, size) {
        num = num.toString(10);
        while (num.length < size) num = "0" + num;
        return num;
    }

    useEffect(() => {
        const interval = setInterval(() => { 
            setTime(new Date()); 
            setLightDivider(!lightDivider);
        }, 1000);

        return () => clearInterval(interval);
    }, [setTime, lightDivider]);

    var hrs1 = time.getHours() / 10;
    var hrs2 = time.getHours() % 10;
    var min1 = time.getMinutes() / 10;
    var min2 = time.getMinutes() % 10;
    var sec1 = time.getSeconds() / 10;
    var sec2 = time.getSeconds() % 10;

    return (
        <>
        <div className='clock' 
             onMouseEnter={() => setShowTime(true)}
             onMouseLeave={() => setShowTime(false)}>
            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={hrs1} maxNumber={2} />
                    <Digit number={hrs2} maxNumber={9} />
                </div>
                <div className='decimal-digits-box' style={showTime ? decimalDigitsVisibleStyle : decimalDigitsInvisibleStyle}>
                    <h2>{pad(time.getHours(), 2)}</h2>
                </div>
            </div>

            <Divider lightDivider={lightDivider} />

            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={min1} maxNumber={5} />
                    <Digit number={min2} maxNumber={9} />
                </div>
                <div className='decimal-digits-box' style={showTime ? decimalDigitsVisibleStyle : decimalDigitsInvisibleStyle}>
                    <h2>{pad(time.getMinutes(), 2)}</h2>
                </div>
            </div>
            
            <Divider  lightDivider={lightDivider} />
            
            <div className='digit-set'>
                <div className='digits'>
                    <Digit number={sec1} maxNumber={5} />
                    <Digit number={sec2} maxNumber={9} />
                </div>
                <div className='decimal-digits-box' style={showTime ? decimalDigitsVisibleStyle : decimalDigitsInvisibleStyle}>
                    <h2>{pad(time.getSeconds(), 2)}</h2>
                </div>
            </div>
        </div>
        <div className='url-display'>
            <a href='https://github.com/PerryBruins/Clock'><h4>Source Code</h4></a>
            <a href='https://securityheaders.com/?q=perrybruins.nl&hide=on&followRedirects=on'><h4>Security Headers</h4></a>
        </div>
        </>
    );
  }