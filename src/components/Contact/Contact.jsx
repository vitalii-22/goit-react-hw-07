import { FiPhone } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={css.contactWrapper}>
        <h4>
          <FiUser />
          {name}
        </h4>
        <p>
          <FiPhone /> {number}
        </p>
      </div>

      <button
        onClick={() => onDeleteContact(id)}
        className={css.deleteButton}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
