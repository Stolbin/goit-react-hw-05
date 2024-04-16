import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  return (
    <div className={css.FormBox}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values) => {
          if (!values.query.trim()) {
            return toast.error(
              "The field must be filled in and cannot be empty"
            );
          }
          onSubmit(values.query);
        }}
      >
        <Form>
          <Field
            className={css.formInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search for films"
          />
          <button className={css.formButton} type="submit">
            Search
          </button>

          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
