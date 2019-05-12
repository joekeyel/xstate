import React, { useState, useRef, useEffect } from 'react'
import { interpret } from 'xstate'
import idaasMachine from './xstate'
import LoginButton from './login.js'


export function useMachine(machine, options) {
  // Keep track of the current machine state
  const [current, setCurrent] = useState(machine.initialState);

  // Reference the service
  const serviceRef = useRef(null);

  // Create the service only once
  // See https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
  if (serviceRef.current === null) {
    serviceRef.current = interpret(machine, options).onTransition(state => {
      // Update the current machine state when a transition occurs
      if (state.changed) {
        setCurrent(state);
      }
    });
  }

  const service = serviceRef.current;

  useEffect(() => {
    // Start the service when the component mounts
    service.start();

    return () => {
      // Stop the service when the component unmounts
      service.stop();
    };
  }, []);

  return [current, service.send];
}



 const Main = () => {
  
  const[machine,send] = useMachine(idaasMachine)
  


  //inital page will request client to call idaas

  console.log(machine)

  

  if(machine.context.code !== '')
  {

   
    send({type:"CALL_BACK"})

  }

  



    return (
      <div>
        <div className = "form-container">
        <div className = "form-header">
          <h2> IDAAS STATE MACHINE </h2>
        </div>

        <div className = "form-body">
        <form 
         onSubmit={
           e => {
             e.preventDefault();
             send({type:"LOGIN"})
           }
         }
        
        >
          <div>
       
          </div>
        {
      
        }  
        <LoginButton hidebutton = {machine.context.hideloginbutton}/>
       <h4> {machine.context.idaasUserInfo.nickname}</h4>
       <h4> {machine.context.idaasUserInfo.national_id_number}</h4>
       <h4> {machine.context.idaasUserInfo.email}</h4>
       <h4> {machine.context.idaasUserInfo.phone_number}</h4>
       <h4> {machine.context.idaasUserInfo.updated_at}</h4>
       <h4> {machine.context.idaasUserInfo.name}</h4>
       
       
        </form>  
        
        <button onClick = {() => send({type:'LOGOUT'})} hidden = {machine.context.hidelogoutbutton} >LogOut</button>
        </div>
        </div>
          
        

        
      </div>
    )
  }



export default Main