import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, ThemeProvider, Typography } from "@mui/material";
import { themeTeal } from "../themes/themeTeal";


export default function CustomCard({
  title="",
  altText="",
  summary="",
  thumbnail="",
  tag="",
  targetlabel="",
}) {

  return (
    <ThemeProvider theme={themeTeal}>
        <Card>
          <CardActionArea>
            <CardMedia component="img" image={thumbnail} alt={altText} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {summary}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              {tag}
            </Button>
            <Button size="small" color="primary">
              {targetlabel}
            </Button>
          </CardActions>
        </Card>
    </ThemeProvider>
  );
}