import { FiPhone } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(deleteContact(id))}
        className={css.deleteButton}
        type="button"
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
