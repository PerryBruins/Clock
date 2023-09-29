import './Digit.css';

import Bit from './Bit';

export default function Digit({number, maxNumber}) {
    return (
        <div className="digit">
            <Bit on={number & 8} visible={maxNumber > 7} />
            <Bit on={number & 4} visible={maxNumber > 3} />
            <Bit on={number & 2} visible={true}/>
            <Bit on={number & 1} visible={true}/>
        </div>
    );
}