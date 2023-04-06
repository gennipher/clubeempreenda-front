import * as React from 'react';
//import Link from '@mui/material/Link';
import { 
    Typography, 
    Link, 
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
    Box
} from "@mui/material";
import { MuiFileInput } from 'mui-file-input'

import { useRouter } from 'next/router'

export default function NovoPost() {
    const router = useRouter()

    const [file, setFile] = React.useState(null)

    const handleChange = (newFile) => {
        setFile(newFile)
    }

  return (
    <div>
        <Container maxWidth="100%" sx={{ marginTop: 5 }}>
            <Grid
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                
            >
                <Paper
                    elevation={2}
                    sx={{ padding: 5}}
                >
                    <Typography 
                        variant="body2" 
                        color="black" 
                        fontSize="26px"
                        sx={{ marginBottom: 5 }}
                    >
                        Compartilhe dicas e experiências
                    </Typography>

                    <Grid sx={{ marginBottom: 3}}>
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            placeholder="Título"

                        />
                    </Grid>
                    <Grid sx={{ marginBottom: 3}}>
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            multiline
                            rows={4}
                            placeholder="Comece a publicar..."
                        />
                    </Grid>
                    <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                        <MuiFileInput value={file} onChange={handleChange} />
                        <Button variant="contained">Publicar</Button>
                    </Grid>

                    
                </Paper>
            </Grid>
        </Container>
    </div>
  );
}
