import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import React, { useState } from "react";
import { createGroup } from "../utils";
import { nameLength } from "Utils/CharLength";

interface Props {
  entityId: string;
  handleDialogClose: () => void;
}

const NewGroup = ({ entityId, handleDialogClose }: Props) => {
  const [groupName, setGroupName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createGroup(groupName, entityId);
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
          minLength: nameLength.min,
          maxLength: nameLength.max,
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
