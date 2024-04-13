import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import Loader from './components/Loader/Loader';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error !== null && <ErrorMessage />}
      <ContactList />
    </div>
  );
}

export default App;
