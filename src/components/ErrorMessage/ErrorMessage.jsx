import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contactsSlice';

const ErrorMessage = () => {
  const errorMessage = useSelector(selectError);
  console.log(errorMessage);

  return <p>{errorMessage}</p>;
};

export default ErrorMessage;
