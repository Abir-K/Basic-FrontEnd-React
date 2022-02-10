import react from 'react';
import { Link } from 'react-router-dom';
import {useStyle} from './Buttons.css';


export const Button =() => {
    return (
        <Link to='sign-up'>
            <button className='btn'>
                Sign Up
            </button>
        </Link>
    );
};

export default Button;