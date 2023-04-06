import { 
    Typography, 
    Link, 
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

const Login = () => {
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
                                Entrar                  
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
                            <Grid item sx={{ marginBottom: 1 }}>
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
                                <Typography 
                                    className={styles.esqueciSenha}
                                    onClick={() => router.push('/RedefinirSenha')}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Esqueci a senha
                                </Typography>
                            </Grid>

                            <Grid item sx={{ marginBottom: 2 }}>
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={() => router.push('/Inicio')}
                                >
                                    Entrar

                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="link"
                                    fullWidth
                                    onClick={() => router.push('/Cadastro')}
                                >
                                    Ainda não tem conta? Clique aqui!
                                </Button>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}

export default Login;


/* export default class App extends Component {
  state = {
    email: "",
    password: ""
  };

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
                    <h3>Entrar</h3>                    
                </div>

                <div className={styles.App}>
                    <TextField
                        
                        id="outlined-required"
                        label="E-mail"
                        type="email"
                        autoComplete="current-email"
                    />
                    <TextField
                        
                        id="outlined-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                    />
                    <Typography className={styles.esqueciSenha}>
                        <Link href="#" underline="none" color={'black'}>
                            Esqueci a senha
                        </Link>
                    </Typography>

                    <div className={styles.btnLogin}>
                        <Button 
                            type="button" 
                            variant="contained" 
                            color="primary"
                            sx={{ marginTop: 3}}
                        >
                            Entrar
                        </Button>

                        <Button
                            variant="link"
                            sx={{ marginTop: 2}}
                            onClick={() => router.push('/Cadastro')}
                        >
                            Ainda não tem conta? Clique aqui!
                        </Button>
                    </div>

                </div>
            </Box>
        </div>
    );
  }
} */