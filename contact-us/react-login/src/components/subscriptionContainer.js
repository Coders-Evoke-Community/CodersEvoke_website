import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
        backgroundColor: '#c9dafd'
    },
}));

export default function SubscriptionContainer(props) {
    const classes = useStyles();
    const [chipData, setChipData] = React.useState([]);


    useEffect(() => {
        const dataArr = props?.data?.map((item, index) => {
            return {
                key: index,
                label: item.email
            }
        })
        setChipData(dataArr)
    }, [props.data])

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    return (
        <Paper component="ul" className={classes.root}>
            {chipData?.map((data) => {
                let icon;

                if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                }

                return (
                    <li key={data.key}>
                        <Chip
                            icon={icon}
                            label={data.label}
                            onDelete={() => props.onDelete(data.label)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}