import s from './ContactListItem.module.css';
import Loader from 'react-loader-spinner';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts/contacts-selectors';
import { deleteContactThunk } from '../../redux/contacts/contacts-operations';

export function ContactListItem({ name, id, number }) {
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();
  
  return (
    <>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button onClick={() => dispatch(deleteContactThunk(id))} type="button" className={s.button}>
        {isLoading ? (
          <Loader type="Rings" color="#003377" height={40} width={40} />
        ) : (
          'Delete'
        )}
      </button>
    </>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
