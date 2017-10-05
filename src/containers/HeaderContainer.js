import {connect} from 'react-redux';
import {Header} from '../components/Header';
import {addTodo} from '../store/todos';
import {addCategory} from '../store/categories';
import {parse, stringify} from 'query-string';
import { ActionCreators } from 'redux-undo';

const mapPropsToState = (state, ownProps) => ({
    filter: parse(ownProps.location.search),
    undoDisabled: state.categories.past.length === 0,
    redoDisabled: state.categories.future.length === 0,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onCategoryAdd: title => dispatch(addCategory({title})),
    onTodoAdd: title => dispatch(addTodo({title, catId: ownProps.match.params.catId})),
    onToggleFilter: isChecked => ownProps.history.push(`${ownProps.match.url}${assemble(String(isChecked), getQuery(ownProps.location.search))}`),
    onQuery: query => ownProps.history.push(`${ownProps.match.url}${assemble(getShowDone(ownProps.location.search), query)}`),
    clearSearch: () => ownProps.history.push(`${ownProps.match.url}${assemble(getShowDone(ownProps.location.search), '')}`),
    undo: () => dispatch(ActionCreators.undo()),
    redo: () => dispatch(ActionCreators.redo()),
    // save: () => dispatch(ActionCreators)
});

const getQuery = search => parse(search).query;
const getShowDone = search => parse(search).showDone;
const assemble = (showDone, query) => {
    showDone = showDone === 'true' ? showDone : undefined;
    query = query || undefined;
    const url = stringify({showDone, query});
    return url ? `?${url}` : ''
};

export default connect(mapPropsToState, mapDispatchToProps)(Header);
