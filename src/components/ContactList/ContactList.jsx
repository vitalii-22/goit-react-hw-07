import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const getVisibleContacts = (arrContacts, filter) => {
  return arrContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
