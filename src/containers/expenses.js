import { connect } from 'react-redux'
import ExpensesAll from '../components/expenses/expenses-all'
import { addExpense } from '../actions/index'

const mapStateToProps = state => ({
  expenses: state.expenses
})

const mapDispatchToProps = dispatch => ({
  addExpense: (name, cost) => dispatch(addExpense(name, cost))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesAll)