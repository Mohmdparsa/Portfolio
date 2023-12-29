const DrawerActionButton = ()=>{
    return(
        <>
            
            <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <Fab
            aria-label="Sidebar"
            size="small"
            sx={{ m: 2, color: red[500] }}
            onClick={handleDrawerToggle}
          >
            <MenuRounded />
          </Fab>
        </Box>
        </>
    )
}

export default DrawerActionButton