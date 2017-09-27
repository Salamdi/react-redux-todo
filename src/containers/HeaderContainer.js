import { connect } from 'react-redux'
import { Header } from '../components/Header'
import {
    addCategory,
    addTodo
} from '../store/actions'
import { parse, stringify } from 'query-string'

const matchPropsToState = (state, ownProps) => ({
    filter: parse(ownProps.location.search)
})

const matchDispatchToProps = (dispatch, ownProps) => ({
    onCategoryAdd: newCategoryTitle => dispatch(addCategory(null /* no parent */, newCategoryTitle)),
    onTodoAdd: newTodoTitle => dispatch(addTodo(newTodoTitle, ownProps.match.params.catId)),
    onToggleFilter: isChecked => ownProps.history.push(`${ownProps.match.url}${assemble(String(isChecked), getQuery(ownProps.location.search))}`),
    onQuery: query => ownProps.history.push(`${ownProps.match.url}${assemble(getShowDone(ownProps.location.search), query)}`),
    clearSearch: () => ownProps.history.push(`${ownProps.match.url}${assemble(getShowDone(ownProps.location.search), '')}`)
})

const getQuery = search => parse(search).query
const getShowDone = search => parse(search).showDone
const assemble = (showDone, query) => {
    showDone = showDone === 'true' ? showDone : undefined
    query = query || undefined
    const url = stringify({showDone, query})
    console.log(url)
    return url ? `?${url}` : ''
}

export default connect(matchPropsToState, matchDispatchToProps)(Header)