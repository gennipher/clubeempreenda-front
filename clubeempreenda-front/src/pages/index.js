import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "../components/Navbar"

export default function MyApp() {
  return (
    <div>
        <React.StrictMode>
            <StyledEngineProvider injectFirst>
                <Navbar />
            </StyledEngineProvider>
        </React.StrictMode>
    </div>
  );
}
