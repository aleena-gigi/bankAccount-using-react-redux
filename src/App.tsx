import { useDispatch,useSelector } from 'react-redux';
import { AccountState} from './app/store';
import { depositMoney, withdrawMoney } from './features/accountSlice';

function App() {
  const state=useSelector((state:AccountState)=>state.account.value)
  const dispatch=useDispatch()

  //now you need to create the event handlers for each reducers
  const handleDeposit=()=>{
    dispatch(depositMoney({type:"deposit",amount:100}))    //dispatch action creators
  }
  const handleWithdraw=()=>{
    dispatch(withdrawMoney({type:"withdraw",amount:100}))
  }
  return (
    <div className="App">
        <h1>{state}</h1>
        <button onClick={()=>{handleDeposit()}}>Deposit</button>
        <button onClick={()=>{handleWithdraw()}}>Withdraw</button>
    </div>
  );
}

export default App;
