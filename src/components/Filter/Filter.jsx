import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { changeFilter } from '../../redux/contacts/contacts-slice';

export function Filter() {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <form className={s.filterForm} onSubmit={onChange}>
      <label className={s.label}>Find contacts by name</label>
      <input
        type="tel"
        placeholder="type name"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
        className={s.input}
      />
    </form>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
