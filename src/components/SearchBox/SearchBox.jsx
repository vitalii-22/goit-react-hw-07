import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const nameFilter = useSelector(selectNameFilter);

  return (
    <label className={css.searchLabel}>
      Find contacts by name
      <input
        className={css.searchInput}
        type="text"
        name="name"
        value={nameFilter}
        onChange={(evt) =>
          dispatch(changeFilter(evt.target.value.toLowerCase()))
        }
      />
    </label>
  );
};

export default SearchBox;
