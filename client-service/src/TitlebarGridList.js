import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';
import getImagesAction from './actions/imagesActions';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

export class TitlebarGridList extends React.Component {
simpleAction = (event) => {
 this.props.getImagesAction();
}

//function TitlebarGridList(props) 
    render(){
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={280} className={classes.gridList} cols={3}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={1}>
            <img onClick={this.simpleAction} src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({
 getImagesAction: () => dispatch(getImagesAction())
});

//export default withStyles(styles)(TitlebarGridList);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TitlebarGridList));
