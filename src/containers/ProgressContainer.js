import LinearProgress from 'material-ui/LinearProgress'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    value: calcProgress(state.categories.present.find(cat => cat.id === ownProps.catId)),
    mode: 'determinate',
    style: {height: '16px', borderRadius: '4px'}
});

const calcProgress = (cat) => cat && (cat.todos.reduce((prev, curr) => curr.completed ? prev + 1 : prev, 0) / cat.todos.length * 100 || 0);



const mergeProps = (stateProps, ownProps, dispatchProps) => ({
    ...stateProps
});

export default connect(mapStateToProps, {}, mergeProps)(LinearProgress);

