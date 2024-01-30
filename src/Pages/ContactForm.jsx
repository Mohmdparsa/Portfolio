import {
  CardContent,
  InputAdornment,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../Validations/ContactValidation";

const ContactForm = () => {
  const contactInputName = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };
  const formik = useFormik({
    initialValues: contactInputName,
    onSubmit: (values) => {
      console.log("Form Values:", values);
    },
    validationSchema: ContactValidationSchema,
  });
  return (
    <>
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container>
            <Grid xs={12} sx={{ direction: "ltr" }}>
              <Grid spacing={5}>
                <Grid xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    size="small"
                    color="warning"
                    label="نام و نام خانوادگی"
                    name="fullname"
                    variant="outlined"
                    helperText={
                      formik.touched.fullname ? formik.errors.fullname : null
                    }
                    error={Boolean(
                      formik.touched.fullname && formik.errors.fullname
                    )}
                    values={formik.values?.fullname}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face6Rounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    size="small"
                    color="warning"
                    label="آدرس ایمیل"
                    name="email"
                    variant="outlined"
                    helperText={
                      formik.touched.email ? formik.errors.email : null
                    }
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    values={formik.values?.email}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    size="small"
                    color="warning"
                    label="عنوان"
                    name="subject"
                    variant="outlined"
                    helperText={
                      formik.touched.subject ? formik.errors.subject : null
                    }
                    error={Boolean(
                      formik.touched.subject && formik.errors.subject
                    )}
                    values={formik.values?.subject}
                    onChange={formik.handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SubjectRounded />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid xs={12} md={12}>
                  <TextField
                    margin="normal"
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    color="warning"
                    label="متن "
                    name="message"
                    variant="outlined"
                    helperText={
                      formik.touched.message ? formik.errors.message : null
                    }
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    values={formik.values?.message}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ alignItems: "end", flexDirection: "column" }}>
          <Button
            type="submit"
            color="success"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            ارسال کن
          </Button>
        </CardActions>
      </form>
    </>
  );
};

export default ContactForm;
