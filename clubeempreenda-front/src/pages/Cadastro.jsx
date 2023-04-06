import { 
    Typography,
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment
} from "@mui/material";

import React, { useState } from "react";
import { useRouter } from 'next/router'
import styles from "../styles/Login.module.scss";
import Navbar from "../components/Navbar";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Cadastro = () => {
    const router = useRouter()
    
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordHide =() => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };

    return (
        <div>
            <Navbar />
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Paper
                        elevation={2}
                        sx={{ padding: 5}}
                    >
                        <Grid>
                            <Typography className={styles.AppTitle}>
                                Cadastrar                  
                            </Typography>
                        </Grid>

                        <form onSubmit={handleSubmit}>
                            <Grid container direction="column" sx={{ marginBottom: 3 }}>
                                <TextField
                                    name="email"
                                    type="email"
                                    fullWidth
                                    label="E-mail"
                                    placeholder="E-mail"
                                    variant="outlined"
                                    required
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item sx={{ marginBottom: 3 }}>
                                <TextField
                                    name="password"
                                    type={values.showPassword ? "text" : "password"}
                                    fullWidth
                                    label="Senha"
                                    placeholder="Senha"
                                    variant="outlined"
                                    required
                                    InputProps={{ 
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    aria-label="toggle password"
                                                    edge="end"
                                                    onClick={togglePasswordHide}
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityIcon />
                                                    ) : (
                                                        <VisibilityOffIcon />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item sx={{ marginBottom: 3 }}>
                                <TextField
                                    name="password"
                                    type={values.showPassword ? "text" : "password"}
                                    fullWidth
                                    label="Confirme sua senha"
                                    placeholder="Senha"
                                    variant="outlined"
                                    required
                                    InputProps={{ 
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton 
                                                    aria-label="toggle password"
                                                    edge="end"
                                                    onClick={togglePasswordHide}
                                                >
                                                    {values.showPassword ? (
                                                        <VisibilityIcon />
                                                    ) : (
                                                        <VisibilityOffIcon />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item sx={{ marginBottom: 2 }}>
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Cadastrar

                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="link"
                                    fullWidth
                                    onClick={() => router.push('/Login')}
                                >
                                    Já tem cadastro? Clique aqui!
                                </Button>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}

export default Cadastro;

/* export default class App extends Component {

  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Box
                className={styles.form}
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '55ch' },}}
                noValidate
                autoComplete="on"
            >
                <div className={styles.AppTitle}>
                    <h3>Cadastre-se</h3>                    
                </div>

                <div className={styles.App}>
                    <TextField
                        required
                        id="outlined-required"
                        label="E-mail"
                        type="email"
                        autoComplete="current-email"
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Confirmar senha"
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                    />

                    <div className={styles.btnCadastrar}>
                        <Button 
                            type="button" 
                            variant="contained" 
                            color="primary"
                            sx={{ marginTop: 3}}
                        >
                            Cadastrar
                        </Button>

                        <Button
                            variant="link"
                            sx={{ marginTop: 2}}
                            onClick={() => router.push('/Login')}
                        >
                            Já tenho cadastro
                        </Button>
                    </div>

                </div>
            </Box>
        </div>
    );
  }
} */