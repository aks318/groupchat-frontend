import React, { Fragment, useEffect, useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Searchbar from "Component/Searchbar";
import API from "Utils/intercepter";
import { theme } from "Utils/theme";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { CustomButton } from "Layout/Button/Button.styles";
import { useSelector } from "react-redux";
import { addPeople } from "../utils";

interface Props {
  groupDetail: groupDetailType;
  handleDialogClose: () => void;
}
const AddPeople = ({ groupDetail }: Props) => {
  const { userDetails } = useSelector((state: AppState) => state.authReducer);
  const [searchText, setSearchText] = useState("");
  const [userList, setUserList] = useState<userDetailsType[]>([]);
  const [addedList, setAddedList] = useState<userDetailsType[]>([]);

  const handleChange = (value: string) => {
    setSearchText(value);
  };
  const handleSearch = async () => {
    const res = await API.post("user/searchUser", { searchText });
    setUserList(res.data.data);
  };
  useEffect(() => {
    let timer = setTimeout(() => {
      if (searchText.length) handleSearch();
    }, 300);
    return () => clearTimeout(timer);
  }, [searchText]);

  const checkAdded = (entityId: string) => {
    const check =
      addedList.find((data) => data.entityId === entityId) ||
      groupDetail.people.includes(entityId);
    if (check) {
      return true;
    } else return false;
  };
  const handleAdd = (data: userDetailsType) => {
    if (!checkAdded(data.entityId)) {
      setAddedList((prev) => [data, ...prev]);
    }
  };
  const handleRemove = (entityId: string) => {
    setAddedList((prev) => prev.filter((data) => data.entityId !== entityId));
  };

  const handleAddPeople = async () => {
    const entityIdList = addedList.map((data) => data.entityId);
    await addPeople(groupDetail.entityId, entityIdList);
  };
  return (
    <Box
      sx={{
        height: 400,
        mt: 1.5,
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Searchbar
          placeholder="Search Username..."
          handleChange={handleChange}
          value={searchText}
        />
        <Box
          sx={{
            position: "absolute",
            zIndex: 99,
            display: searchText ? "" : "none",
            top: 34,
            left: 0,
            right: 0,
            height: 300,
            borderRadius: 1,
            backgroundColor: theme.bg.blue.primary,
            px: 1.5,
            py: 1,
          }}
        >
          {userList.map((data) => (
            <Fragment key={data.entityId}>
              <Box
                sx={{
                  py: 1,
                  display:
                    userDetails.entityId === data.entityId ? "none" : "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onClick={() => handleAdd(data)}
              >
                <Box
                  sx={{
                    height: 42,
                    width: 42,
                    borderRadius: "50%",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: theme.color.blue.tertiary,
                    overflow: "hidden",
                    "& img": {
                      width: "100%",
                      objectFit: "contain",
                    },
                  }}
                >
                  <img
                    src={require(`Images/Avatar/avatar${data.avatarId}.svg`)}
                    alt="avatar"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      opacity: 0.9,
                      fontSize: 14,
                      lineHeight: 1,
                      textTransform: "capitalize",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.color.white.primary,
                      opacity: 0.8,
                      fontSize: 12,
                      lineHeight: 1,
                    }}
                  >
                    {data.username}
                  </Typography>
                </Box>
                {checkAdded(data.entityId) ? (
                  <CheckCircleOutlineIcon
                    sx={{ color: theme.color.white.secondary, ml: "auto" }}
                  />
                ) : undefined}
              </Box>
              <Divider
                sx={{
                  display:
                    userDetails.entityId === data.entityId ? "none" : "flex",
                  borderColor: theme.color.white.primary,
                  opacity: 0.2,
                }}
              />
            </Fragment>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          height: 250,
          border: `1px solid ${theme.color.blue.primary}`,
          borderRadius: 1,
          p: 1,
          display: "flex",
          gap: 1,
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {addedList.map((data) => (
          <Box
            key={data.entityId}
            sx={{
              flexShrink: 0,
              py: 0.5,
              px: 1,
              borderRadius: 0.5,
              backgroundColor: theme.bg.blue.primary,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                color: theme.color.white.primary,
                opacity: 0.9,
                fontSize: 14,
                lineHeight: 1,
                textTransform: "capitalize",
              }}
            >
              {data.name}
            </Typography>
            <IconButton
              onClick={() => handleRemove(data.entityId)}
              sx={{ p: 0 }}
            >
              <CloseIcon
                sx={{ color: theme.color.white.primary, fontSize: 18 }}
              />
            </IconButton>
          </Box>
        ))}
      </Box>
      <CustomButton
        variant="contained"
        onClick={handleAddPeople}
        sx={{ mt: "auto" }}
        disabled={!addedList.length}
      >
        Add
      </CustomButton>
    </Box>
  );
};

export default AddPeople;
