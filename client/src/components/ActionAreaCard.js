import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
class ActionAreaCard extends React.Component {

    constructor(props){
        super(props);
        this.renderAccordions = this.renderAccordions.bind(this);
    }

    renderAccordions(){

        return this.props.ecommerceOptions.map((ecommerceOption, index) => {
            return (
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>{ecommerceOption.website} - {ecommerceOption.price}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    <Link href={ecommerceOption.link} target="_blank"> Get this product at {ecommerceOption.website}</Link>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            );
        });

    }

    render(){

        return(
            <>
            <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="250"
            image={this.props.productImage}
            alt="Product Image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {this.props.modelName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {this.props.description}
            </Typography>
            </CardContent>
            <div>
                {this.renderAccordions()}
            </div>
            </CardActionArea>
            </Card>
            </>
        );
    }
}

export default ActionAreaCard;

