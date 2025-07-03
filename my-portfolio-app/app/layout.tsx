

'use client';

import { AppBar, CssBaseline, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()


  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <html lang="en">
      <head/>
      <body>
      <CssBaseline/>
        <AppBar position='static'>
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Howdy, Welcome to my portfolio
          </Typography>
          <Button color="inherit" onClick={()=>handleNavigation('/home')}>Home</Button>
          <Button color="inherit" onClick={ ()=>handleNavigation('/portfolio')}>Portfolio</Button>
          <Button color="inherit" onClick={ ()=> handleNavigation('/contact')}>Contact</Button>
          <Button color="inherit" onClick={()=> handleNavigation('/about')}>About Me</Button>
          </Toolbar>
        </AppBar>

        {children} 
      </body>
    </html>
  )
}
