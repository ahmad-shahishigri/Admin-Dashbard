import React from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Header from "../../components/Header";
import { useUser } from "../../context/UserContext";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { users, deleteUser } = useUser();

  // Create a proper combined list with sequential IDs for display
  const allUsers = [...mockDataTeam, ...users].map((user, index) => ({
    ...user,
    // Create a display ID that's sequential, but keep original ID for operations
    displayId: index + 1,
    // Keep the original ID for delete operations
    originalId: user.id
  }));

  const handleDelete = (originalId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(originalId);
    }
  };

  const columns = [
    { 
      field: "displayId", 
      headerName: "ID", 
      width: 70,
      valueGetter: (params) => params.row.displayId
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 80,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              row.access === "admin"
                ? colors.greenAccent[600]
                : row.access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {row.access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {row.access === "manager" && <SecurityOutlinedIcon />}
            {row.access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {row.access}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params.row.originalId)}
          sx={{
            color: colors.redAccent[500],
            '&:hover': {
              color: colors.redAccent[400],
              backgroundColor: 'rgba(255, 0, 0, 0.1)'
            }
          }}
        >
          <DeleteOutlineIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title={"TEAM"} subtitle={"Managing the Team Members."} />
      <Box
        m={"10px 0 0 0"}
        height={"70vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
        }}
      >
        <DataGrid 
          checkboxSelection 
          rows={allUsers} 
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          getRowId={(row) => row.originalId} // Use originalId as the unique row ID
        />
      </Box>
    </Box>
  );
};

export default Team;