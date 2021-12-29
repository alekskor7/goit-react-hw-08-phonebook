import s from './ContactList.module.css';
import Loader from 'react-loader-spinner';
import { ContactListItem } from './ContactListItem';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts/contacts-selectors';
import { ToastContainer } from 'react-toastify';
import { getContactsThunk } from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';

export function ContactList() {

  const contacts = useSelector(contactsSelectors.contacts);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const filter = useSelector(contactsSelectors.filter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getContactsThunk()), [dispatch]);

  return (
    <>
      <div className={s.loader}>
        {isLoading && (
          <Loader type="Rings" color="#003377" height={100} width={100} />
        )}
      </div>
    
      {contacts && !isLoading && (
        <ul className={s.contactList}>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase()),
            )
            .map(({ name, id, number }) => (
              <li key={id} className={s.contact}>
                <ContactListItem
                  id={id}
                  name={name}
                  number={number}
                ></ContactListItem>{' '}
              </li>
            ))}
        </ul>
      )}
      <ToastContainer />
    </>
  );
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};