
import { createContext, useContext ,useState} from 'react';
import { Web3Button, useAccount, useSigner ,useDisconnect} from '@web3modal/react';
const AccountContext = createContext();



export function AccountWrapper({ children }) {
  const { account, isReady } = useAccount()
  const [user,setAccount] = useState(null)
  const [status,setSatus] = useState(false)
  const disconnect = useDisconnect()
  if (isReady){
    console.log(account.address);
  }
  const SignIn=(data)=>{
    // console.log("sign in");
    setAccount(data)
    setSatus(true)
  }
  const SignOut=()=>{
    // console.log("sign out");
    setAccount(null)
    setSatus(false)
    if(account.isConnected){
      
      disconnect()
    }
    
  }
  // console.log("user");
  let sharedState = {user,SignIn,SignOut,status}
  return (
    <AccountContext.Provider value={sharedState}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  return useContext(AccountContext);
}