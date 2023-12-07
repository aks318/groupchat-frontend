import React, { useState } from "react";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";
import { updateUser } from "./utils";
import { nameLength, usernameLength } from "Utils/CharLength";

interface Props {
  userDetails: userDetailsType;
  handleDialogClose: () => void;
}
const Details = ({ userDetails, handleDialogClose }: Props) => {
  const [name, setName] = useState(userDetails.name);
  const [username, setUsername] = useState(userDetails.username);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateUser(name, username, userDetails.entityId);
    handleDialogClose();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <CustomTextInput
        name="name"
        label="Name"
        placeholder="Name"
        value={name}
        sx={{ width: "100%" }}
        inputProps={{
          minLength: nameLength.min,
          maxLength: nameLength.max,
        }}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <CustomTextInput
        name="username"
        label="Username"
        placeholder="Username"
        value={username}
        sx={{ width: "100%" }}
        inputProps={{
          minLength: usernameLength.min,
          maxLength: usernameLength.max,
        }}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <CustomButton variant="contained" type="submit">
        Submit
      </CustomButton>
    </form>
  );
};

export default Details;
