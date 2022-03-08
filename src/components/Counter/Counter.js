import {useState} from 'react';
import './Counter.css';

const Counter = () => {
    const [value, setValue] = useState(10);
    const handleAdd = () => {
        setValue(value + 1);
    }
    const handleMinus = () => {
        setValue(value - 1);
    }
    return (
        <div>
            <button onClick={handleMinus} className="counter__btn">-</button>
            <span className="counter__value">{value}</span>
            <button onClick={handleAdd} className="counter__btn">+</button>
        </div>
    );
}

export default Counter;