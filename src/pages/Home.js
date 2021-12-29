import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>Welcome to the Phonebook!</h1>
      <h2>Service for save your contacts!</h2>
      <p>Please, <Link to="/register"> Sign Up </Link> or <Link to="/login">Login!</Link></p> 
    </>
  );
}