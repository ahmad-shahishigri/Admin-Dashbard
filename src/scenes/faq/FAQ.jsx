import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page."} />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add a new user to the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Steps to add a new user:
          </Typography>
          <Typography>
            1. Navigate to the "Form" page from the sidebar<br/>
            2. Fill in all required user details (Name, Email, Phone, Age, Address, Access Level)<br/>
            3. Click the "Create New User" button<br/>
            4. The system will automatically redirect you to the Team page<br/>
            5. The new user will appear in the team members list
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded> 
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I delete a team member?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Deleting a user from the system:
          </Typography>
          <Typography>
            1. Go to the "Team" page from the sidebar<br/>
            2. Locate the user you want to remove from the table<br/>
            3. Click the delete icon (🗑️) in the Actions column<br/>
            4. Confirm the deletion in the popup dialog<br/>
            5. The user will be immediately removed from the system<br/>
            <br/>
            <strong>Note:</strong> This action cannot be undone.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What do the different access levels mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Access Level Permissions:
          </Typography>
          <Typography>
            • <strong>Admin</strong>: Full system access including user management, data modification, and all administrative features<br/>
            • <strong>Manager</strong>: Can view all data, generate reports, and manage team members but cannot change system settings<br/>
            • <strong>User</strong>: Basic access with view-only permissions for dashboard and reports, limited editing capabilities<br/>
            <br/>
            <em>Access levels can be assigned when creating new users or updated by administrators.</em>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I switch between dark and light mode?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Theme customization:
          </Typography>
          <Typography>
            1. Look for the theme toggle button in the top navigation bar<br/>
            2. Click the button to switch between dark and light modes<br/>
            3. Your preference is automatically saved<br/>
            4. The theme applies consistently across all dashboard pages<br/>
            <br/>
            <strong>Benefit:</strong> Dark mode reduces eye strain in low-light environments, while light mode provides better readability in well-lit conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I export data from the charts and tables?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Data Export Options:
          </Typography>
          <Typography>
            • <strong>Charts:</strong> Currently view-only with interactive features<br/>
            • <strong>Team Table:</strong> Select rows using checkboxes for bulk operations<br/>
            • <strong>Export Features:</strong> CSV and PDF export coming in v2.0<br/>
            <br/>
            For now, you can use browser print functionality or take screenshots of the data visualizations.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I navigate between different sections?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            Dashboard Navigation Guide:
          </Typography>
          <Typography>
            • Use the <strong>sidebar menu</strong> on the left to access all features<br/>
            • <strong>Dashboard:</strong> Overview with key metrics and charts<br/>
            • <strong>Team:</strong> Manage team members and user accounts<br/>
            • <strong>Contacts:</strong> View contact information<br/>
            • <strong>Invoices:</strong> Financial and billing information<br/>
            • <strong>Form:</strong> Create new user profiles<br/>
            • <strong>Calendar:</strong> Schedule and events management<br/>
            • <strong>Charts:</strong> Various data visualizations (Bar, Pie, Line, Geography)<br/>
            <br/>
            The top bar always shows your current location and provides quick access to theme settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
           