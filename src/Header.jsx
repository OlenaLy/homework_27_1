import { Link } from 'react-router-dom';

export default function Header(){
    return <>
        <ul className='menu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
    </>
}