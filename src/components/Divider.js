import './Divider.css';

export default function Divider({lightDivider}) {
    return (
        <div className='divider'>
            <span className={lightDivider ? 'divider-dot' : 'divider-dot-light'} />
            <span className={lightDivider ? 'divider-dot' : 'divider-dot-light'} />
        </div>
    );
}