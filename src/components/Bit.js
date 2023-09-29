import './Bit.css';

export default function Bit({on, visible}) {
    var className = on ? 'bit-on' : 'bit-off';
    if (!visible) className = 'bit-invisible';

    return (
        <span className={className} />
    );
}