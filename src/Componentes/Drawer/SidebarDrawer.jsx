const SidebarDrawer = ()=>{
    return(
        <>
                <Drawer
          open={open}
          variant="temporary"
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 300,
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <DrawerContent value={value} handleChange={handleChange} />
        </Drawer>
        </>
    )
}

export default SidebarDrawer