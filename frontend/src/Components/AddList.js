import { useRef } from "react";
import styles from "./AddList.module.css";
//change to buttons to press to buy books//

const AddList = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className={styles.addForm} onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>

      <input
        type="text"
        id="addItem"
        autoFocus
        ref={inputRef}
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <h3>+</h3>
      </button>
    </form>
  );
};

export default AddList;
