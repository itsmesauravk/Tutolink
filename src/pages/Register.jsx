// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import {
  Button,
  TextField,
  Tab,
  Tabs,
  Box,
  Typography,
  Link,
} from "@mui/material"

const Register = () => {
  const [tabValue, setTabValue] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // User form state
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userConfirmPassword, setUserConfirmPassword] = useState("")

  // Tutor form state
  const [tutorName, setTutorName] = useState("")
  const [tutorEmail, setTutorEmail] = useState("")
  const [tutorPassword, setTutorPassword] = useState("")
  const [tutorContact, setTutorContact] = useState("")
  const [tutorAddress, setTutorAddress] = useState("")
  const [tutorAge, setTutorAge] = useState("")
  const [tutorDocument, setTutorDocument] = useState(null)
  const [tutorCoverLetter, setTutorCoverLetter] = useState(null)

  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const handleSubmit = (accountType) => {
    setIsSubmitting(true)

    if (accountType === "User") {
      console.log({
        accountType,
        userName,
        userEmail,
        userPassword,
        userConfirmPassword,
      })
    } else {
      console.log({
        accountType,
        tutorName,
        tutorEmail,
        tutorPassword,
        tutorContact,
        tutorAddress,
        tutorAge,
        tutorDocument: tutorDocument?.name,
        tutorCoverLetter: tutorCoverLetter?.name,
      })
    }

    setTimeout(() => {
      setIsSubmitting(false)
      alert(`${accountType} Registration Submitted!`)
    }, 1500)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "#F0F0F0", // Light background to complement your theme
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "900px",
          boxShadow: 3,
          p: 4,
          borderRadius: 2,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        {/* Left Side Form Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            pr: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Register As
          </Typography>

          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="registration-tabs"
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "#92E3A9", // Primary color indicator
              },
            }}
          >
            <Tab label="User" sx={{ color: "#74C89D" }} />
            <Tab label="Tutor" sx={{ color: "#74C89D" }} />
          </Tabs>

          {/* User Form */}
          {tabValue === 0 && (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                fullWidth
                margin="dense"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="dense"
                value={userConfirmPassword}
                onChange={(e) => setUserConfirmPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                onClick={() => handleSubmit("User")}
                sx={{
                  mt: 2,
                  backgroundColor: "#92E3A9",
                  "&:hover": {
                    backgroundColor: "#7FCF94",
                  },
                }}
              >
                {isSubmitting ? "Submitting..." : "Register as User"}
              </Button>
            </Box>
          )}

          {/* Tutor Form */}
          {tabValue === 1 && (
            <Box sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                fullWidth
                margin="dense"
                value={tutorName}
                onChange={(e) => setTutorName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="dense"
                value={tutorEmail}
                onChange={(e) => setTutorEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                value={tutorPassword}
                onChange={(e) => setTutorPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Contact"
                fullWidth
                margin="dense"
                value={tutorContact}
                onChange={(e) => setTutorContact(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Address"
                fullWidth
                margin="dense"
                value={tutorAddress}
                onChange={(e) => setTutorAddress(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Age"
                type="number"
                fullWidth
                margin="dense"
                value={tutorAge}
                onChange={(e) => setTutorAge(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Upload Document"
                type="file"
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="dense"
                onChange={(e) => setTutorDocument(e.target.files[0])}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <TextField
                label="Cover Letter (PDF)"
                type="file"
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="dense"
                inputProps={{ accept: "application/pdf" }}
                onChange={(e) => setTutorCoverLetter(e.target.files[0])}
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#92E3A9",
                    },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                onClick={() => handleSubmit("Tutor")}
                sx={{
                  mt: 2,
                  backgroundColor: "#92E3A9",
                  "&:hover": {
                    backgroundColor: "#7FCF94",
                  },
                }}
              >
                {isSubmitting ? "Submitting..." : "Register as Tutor"}
              </Button>
            </Box>
          )}

          {/* Already have an account? */}
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Already have an account?{" "}
            <Link href="/login" sx={{ color: "#92E3A9", fontWeight: "bold" }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Register
