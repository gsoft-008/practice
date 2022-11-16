import { Grid, Typography, Box, Divider } from "@mui/material";

// user imports

import { Arrow_Icon, Post_Icon, Reviews_Icon, Tasks_Icon } from "./SVGS/Index";

function App() {

  // array data  for carrds 
  const array = [
    {
      Icon: <Post_Icon />,
      IconText: "Posts",
      FirstText: "Total Posts",
      FirstTextValue: 400,
      SecondText: " Pending",
      SecondTextValue: 28,
    },
    {
      Icon: <Reviews_Icon />,
      IconText: "Reviews",
      FirstText: "Total Reviews",
      FirstTextValue: 400,
      SecondText: " Rating",
      SecondTextValue: 4.8,
    },
    {
      Icon: <Tasks_Icon />,
      IconText: "Tasks",
      FirstText: "Total Tasks",
      FirstTextValue: 45,
      SecondText: " Open",
      SecondTextValue: 6,
    },
  ];

  // return statemment 


  return (

    <Box m={2} sx={{ backgroundColor: "#F6F6F7" }}>
      <Typography variant="h4">FACTORY GIRL Berlin</Typography>

      <Grid container gap={1} item xs={12} sm={12} md={12} lg={12}>
        {array?.map((items) => (
          <Grid
            item
            lg={3.9}
            md={3.9}
            sm={5.9}
            xs={12}
            mt={2}
            sx={{
              border: "1px solid #E0E0E0",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Grid p={1} item xs={12} sm={12} md={12} lg={12} >
              <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} style={{ alignItems: "center"}}>
              {items?.Icon}
              <Grid xl={9} lg={9} md={9} sm={9} xs={9}>
              <Typography variant="p" sx={{marginLeft : {xs:1 , sm : 1 , md:1 , lg:1}}} >
                  {items?.IconText}
                </Typography>
              </Grid>
                <Arrow_Icon />
              </Grid>
              <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid item xl={7} lg={7} md={6} sm={6} xs={6}>
              <Typography variant="subtitle2">{items?.FirstText} </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {items?.FirstTextValue}{" "}
              </Typography>
            </Grid>

            <Grid item xl={5} lg={5} md={6} sm={6} xs={6}>
              <Typography variant="subtitle2">{items?.SecondText} </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {items?.SecondTextValue}{" "}
              </Typography>
            </Grid>
            </Grid>

            </Grid>

          
          </Grid>
        ))}
      
      </Grid>

      <Divider sx={{marginTop:3 , marginBottom:3}} />

      <Typography variant="h4">FACTORY GIRL Amsterdam</Typography>

      <Grid container gap={1} item xs={12} sm={12} md={12} lg={12}>
        {array?.map((items) => (
          <Grid
            item
            lg={3.9}
            md={3.9}
            sm={5.9}
            xs={12}
            mt={2}
            sx={{
              border: "1px solid #E0E0E0",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Grid p={1} item xs={12} sm={12} md={12} lg={12} >
              <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} style={{ alignItems: "center"}}>
              {items?.Icon}
              <Grid xl={9} lg={9} md={9} sm={9} xs={9}>
              <Typography variant="p" sx={{marginLeft : {xs:1 , sm : 1 , md:1 , lg:1}}} >
                  {items?.IconText}
                </Typography>
              </Grid>
                <Arrow_Icon />
              </Grid>
              <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid item xl={7} lg={7} md={6} sm={6} xs={6}>
              <Typography variant="subtitle2">{items?.FirstText} </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {items?.FirstTextValue}{" "}
              </Typography>
            </Grid>

            <Grid item xl={5} lg={5} md={6} sm={6} xs={6}>
              <Typography variant="subtitle2">{items?.SecondText} </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {items?.SecondTextValue}{" "}
              </Typography>
            </Grid>
            </Grid>

            </Grid>

          
          </Grid>
        ))}
      
      </Grid>

      <Divider sx={{marginTop:3 , marginBottom:3}} />

<Typography variant="h4">FACTORY GIRL Norway</Typography>

<Grid container gap={1} item xs={12} sm={12} md={12} lg={12}>
  {array?.map((items) => (
    <Grid
      item
      lg={3.9}
      md={3.9}
      sm={5.9}
      xs={12}
      mt={2}
      sx={{
        border: "1px solid #E0E0E0",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Grid p={1} item xs={12} sm={12} md={12} lg={12} >
        <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} style={{ alignItems: "center"}}>
        {items?.Icon}
        <Grid xl={9} lg={9} md={9} sm={9} xs={9}>
        <Typography variant="p" sx={{marginLeft : {xs:1 , sm : 1 , md:1 , lg:1}}} >
            {items?.IconText}
          </Typography>
        </Grid>
          <Arrow_Icon />
        </Grid>
        <Grid container item xl={12} lg={12} md={12} sm={12} xs={12}>
      <Grid item xl={7} lg={7} md={6} sm={6} xs={6}>
        <Typography variant="subtitle2">{items?.FirstText} </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {items?.FirstTextValue}{" "}
        </Typography>
      </Grid>

      <Grid item xl={5} lg={5} md={6} sm={6} xs={6}>
        <Typography variant="subtitle2">{items?.SecondText} </Typography>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {items?.SecondTextValue}{" "}
        </Typography>
      </Grid>
      </Grid>

      </Grid>

    
    </Grid>
  ))}

</Grid>

   
    </Box>
  );
}

export default App;
