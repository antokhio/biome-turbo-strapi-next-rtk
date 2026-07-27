import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Head from "next/head";

export default function ThemePage() {
  return (
    <>
      <Head>
        <title>MUI Components</title>
        <meta name="description" content="Material UI component reference" />
      </Head>

      <Box component="main" sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Stack spacing={5}>
            <Stack spacing={1}>
              <Breadcrumbs>
                <Link href="/" underline="hover">
                  Home
                </Link>
                <Typography color="text.secondary">Components</Typography>
              </Breadcrumbs>
              <Typography component="h1" variant="h3">
                Material UI reference
              </Typography>
              <Typography color="text.secondary">
                A working palette of common interface components.
              </Typography>
            </Stack>

            <Paper variant="outlined" sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Typography component="h2" variant="h5">
                  Typography
                </Typography>
                <Typography variant="h1">Heading one</Typography>
                <Typography variant="h2">Heading two</Typography>
                <Typography variant="h3">Heading three</Typography>
                <Typography variant="h4">Heading four</Typography>
                <Typography variant="body1">
                  Primary body copy for longer content and descriptions.
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Secondary text for supporting information.
                </Typography>
                <Typography variant="caption">Caption text</Typography>
              </Stack>
            </Paper>

            <Paper variant="outlined" sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Typography component="h2" variant="h5">
                  Actions
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  <Button variant="contained">Primary action</Button>
                  <Button variant="outlined">Secondary action</Button>
                  <Button variant="text">Text action</Button>
                  <Button color="error">Delete</Button>
                  <IconButton aria-label="Add item" color="primary">
                    +
                  </IconButton>
                  <Badge badgeContent={4} color="error">
                    <IconButton aria-label="Notifications">
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Badge>
                </Stack>
                <ButtonGroup variant="outlined">
                  <Button>Day</Button>
                  <Button>Week</Button>
                  <Button>Month</Button>
                </ButtonGroup>
              </Stack>
            </Paper>

            <Paper variant="outlined" sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Typography component="h2" variant="h5">
                  Inputs
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="Name"
                    placeholder="Enter a name"
                    fullWidth
                  />
                  <TextField
                    label="Search"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            Search
                          </InputAdornment>
                        ),
                      },
                    }}
                    fullWidth
                  />
                  <FormControl fullWidth>
                    <Select
                      defaultValue="draft"
                      inputProps={{ "aria-label": "Status" }}
                    >
                      <MenuItem value="draft">Draft</MenuItem>
                      <MenuItem value="published">Published</MenuItem>
                      <MenuItem value="archived">Archived</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Enabled"
                  />
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Live updates"
                  />
                  <ToggleButtonGroup exclusive value="grid">
                    <ToggleButton value="list">List</ToggleButton>
                    <ToggleButton value="grid">Grid</ToggleButton>
                  </ToggleButtonGroup>
                </Stack>
              </Stack>
            </Paper>

            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Card variant="outlined" sx={{ flex: 1 }}>
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    Card title
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Cards contain grouped information and actions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                  <Button size="small">Share</Button>
                </CardActions>
              </Card>
              <Stack spacing={2} sx={{ flex: 1 }}>
                <Alert severity="success">Saved successfully.</Alert>
                <Alert severity="warning">Review the pending changes.</Alert>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ flexWrap: "wrap" }}
                >
                  <Chip label="Default" />
                  <Chip color="primary" label="Primary" />
                  <Chip color="success" label="Complete" variant="outlined" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{ mt: 5 }} />
        </Container>
      </Box>
    </>
  );
}
