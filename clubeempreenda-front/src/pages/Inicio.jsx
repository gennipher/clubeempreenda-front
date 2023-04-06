import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles'
import NavbarLogado from "../components/NavbarLogado"
import NovoPost from "../components/NovoPost"
import Postagem from "../components/Postagem"
import styles from "../styles/Inicio.module.scss"

import { 
    TextField,
    IconButton,
    Container
} from "@mui/material";

import { MuiFileInput } from 'mui-file-input'
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function MyApp() {
    const [file, setFile] = React.useState(null)

    const handleChange = (newFile) => {
        setFile(newFile)
      }
  return (
    <Container 
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100%', minWidth: '100%'}}
    >
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <NavbarLogado />
                <NovoPost />
                <Postagem />
                <Postagem />
                <Postagem />
                
            </StyledEngineProvider>
        </React.StrictMode>
    </Container>
  );
}
