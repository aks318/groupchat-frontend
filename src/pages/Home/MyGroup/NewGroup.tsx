import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { createGroup } from "../utils";

interface Props {
  handleDialogClose: () => void;
}

const NewGroup = ({ handleDialogClose }: Props) => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const [groupName, setGroupName] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createGroup(groupName, userDetails.entityId);
    handleDialogClose();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "12px 0",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <CustomTextInput
        name="groupname"
        label="Group Name"
        placeholder="Group Name"
        sx={{ width: "100%" }}
        inputProps={{
          minLength: 5,
          maxLength: 20,
        }}
        required
        onChange={(e) => setGroupName(e.target.value)}
      />
      <CustomButton
        variant="contained"
        type="submit"
        sx={{ textTransform: "capitalize" }}
      >
        Create
      </CustomButton>
    </form>
  );
};

export default NewGroup;
