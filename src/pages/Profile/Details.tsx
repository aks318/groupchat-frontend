import React, { useState } from "react";
import { CustomButton } from "Layout/Button/Button.styles";
import { CustomTextInput } from "Layout/TextInput/TextInput.styles";

interface Props {
  userDetails: userDetailsType;
}
const Details = ({ userDetails }: Props) => {
  const [name, setName] = useState(userDetails.name);
  const [username, setUsername] = useState(userDetails.username);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          minLength: 5,
          maxLength: 15,
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
          minLength: 5,
          maxLength: 10,
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
