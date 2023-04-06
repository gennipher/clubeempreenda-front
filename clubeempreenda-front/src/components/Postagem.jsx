import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card 
            maxWidth="100%" 
            elevation={2} 
            sx={{ marginTop: 5, marginLeft: 3, marginRight: 3 }}
        >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        J
                    </Avatar>
                }
                title="Como abrir um MEI"
                subheader="Jennifer Omena - 06/04/2023"
            />
            <CardMedia
                component="img"
                height="194"
                src="https://www.contabeis.com.br/assets/img/news/n_45439_bc573864331a9e42e4511de6f678aa83.jpg"
                alt="Clube Empreenda Logo"
                sx={{ 
                    maxWidth: "50%", 
                    maxHeight:"50%", 
                    width: "auto", 
                    height: "auto", 
                }}
            />
            <CardContent>
                <Typography 
                    variant="body2" 
                    color="black" 
                    fontSize="16px"
                >
                    Texto da publicação
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}