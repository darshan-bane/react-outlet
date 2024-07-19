import EasyEdit, { Types } from "react-easy-edit";

const Blog = () => {
  return (
    <div>
      <EasyEdit
        type={Types.TEXT}
        value="Edit to delete me"
        onSave={() => {}}
        deleteButtonLabel="Remove Me!"
        deleteButtonStyle="remove-class"
        hideDeleteButton={false}
      />
    </div>
  );
};
export default Blog;
