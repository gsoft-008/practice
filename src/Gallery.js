import React from "react";

import { Grid, Typography, Box, Divider } from "@mui/material";

// user imports

import fimage from "./images/fimage.jpeg";

const Gallery = () => {
  return (
    <Box p={1}>
      <Grid container gap={1}  item xs={12} sm={12} md={12} lg={12} alignItems={"stretch"}>
        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12} >
            <Box mt={2} p={1}>
          <Typography variant="p"  > Most Welcme </Typography>
          <Typography variant="h5"> Life at Gsoft </Typography>

          <Typography variant="subtitle1" alignItems={"center"} sx={{fontSize:"85%"}}>
            {" "}
            SVG was born for the web. It’s an open standard that was created by
            W3C to provide a better way to add images to the web. If you open an
            SVG file on your computer, you might be surprised to find that it’s
            all code! This plays a part in the small file size. Typically when
            using SVG, you can take advantage of its smaller size compared to
            larger image files that might be required to deliver the same high
            resolution. Additionally, since we’re defining SVG as paths, they
            can scale as large or as small as we want. This makes them extra
            flexible for web usage, especially when making experiences
            responsive.{" "}
          </Typography>
          </Box>
        </Grid>

        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12} >
          <Box component={"img"} src={fimage} width="100%"  ></Box>
        </Grid>
        {/* sx={{height : {lg:"35%" , md : "55%" , sm : "65%"  }}} */}

        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12}  >
          <Box component={"img"} src={fimage} width="100%" style={{height: '100%'}}></Box>
        </Grid>

        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12} >
          
          <Grid container gap={1} item xs={12} sm={12} md={12} lg={12} >


              <Grid item xs={12} sm={12} md={12} lg={12} >  <Box component={"img"} src={fimage} width="100%"  ></Box> </Grid>

              <Grid item xs={5.8} sm={5.8} md={5.8} lg={5.8}><Box component={"img"} src={fimage} width="100%" ></Box> </Grid>
              <Grid item xs={5.8} sm={5.8} md={5.8} lg={5.8}> <Box component={"img"} src={fimage} width="100%" ></Box></Grid>


          </Grid>

        </Grid>

        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12}  >
          <Box component={"img"} src={fimage} width="100%" style={{height: '100%'}}></Box>
        </Grid>
        <Grid item lg={5.8} md={5.8} sm={5.8} xs={12}  >
          <Box component={"img"} src={fimage} width="100%" style={{height: '100%'}}></Box>
        </Grid>


        
      </Grid>
    </Box>
  );
};

export default Gallery;
