import { UserMenu } from '../components/UserMenu/UserMenu';
import { useDispatch } from 'react-redux';
import { logOutThunk } from '../redux/auth/auth-thunks';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export function Contacts() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutThunk());
  };
  return (
    <>
      <UserMenu handleClick={handleLogout}></UserMenu>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <ContactList />
    </>
  );
}
