
// Available variables:
// Machine (machine factory function)
// assign (action)
// XState (all XState exports)

import { Machine,assign, actions } from 'xstate'

const fetchMachine = Machine({
  id: 'fetch',
  context: { attempts: 0,
             outStandingPayment:'',
             service:''
            },
  initial: 'idle',
  states: {
    idle: {
      on: { PROCEED: 'outStandingPayment',
            NO:'idle'
          }
    },
    outStandingPayment: {
      onEntry: assign({
        attempts: ctx => ctx.attempts + 1,
       
      }),
      
      on: {
        YES: [
          {
            actions: assign({
            outStandingPayment: ctx => "YES" }),
            target:'payment'
          }
         ],
        NO: [
          {
            actions: assign({
            outStandingPayment: ctx => "NO" }),
            target:'service'
          }
         ],
         NOSURE: [
          {
            actions: assign({
            outStandingPayment: ctx => "?" }),
            target:'myunifiportal'
          }
         ]
      }
    },
    payment:{
      on:{
        PAID:'service'
      }
    },
    myunifiportal:{
     
          on:{
            NOOUTSTANDING:
             { target:'service' , actions:assign({
              outStandingPayment: ctx => "NO" })
            },

              OUTSTANDING: 
             { target:'payment',actions:assign({
              outStandingPayment: ctx => "YES" })
            }
           
            
         

      }
      
    },
    service: {
      initial: 'chooseservice',
      states: {
        chooseservice: {
          on: {
            INTERNET_ONLY: {
            target:'ShowConnectionInfoOption' , actions:
            assign({service: ctx => "Internet Only" })
            },
            IPTV_ONLY:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "IPTV Only" })
              },
            VOBB_ONLY:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "VOBB Only" })
              },
            INTERNET_AND_IPTV:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "Internet and IPTV" })
              },
            INTERNET_AND_VOBB:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "Internet and VOBB" })
              },
            IPTV_AND_VOBB:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "IPTV and VOBB" })
              },
            ALL_SERVICES:{
              target:'ShowConnectionInfoOption' , actions:
              assign({service: ctx => "ALL SERVICES" })
              }
          }
         
          

        },

        ShowConnectionInfoOption : {
          on:{
            PROCEED : 'ShowConnectionInfo',
            NOTHANKS : 'GeneratingReport'
          }
        },
       
        ShowConnectionInfo :{
          on:{
            PROCEED : 'GeneratingReport'
          }
        },

        GeneratingReport : {
         on : {
           '' : {
                  target:'ShowingReport'
                }
         }
        },
        ShowingReport : {
          on : {
            '' : {
                  target : 'finish'
                 }
          }
        } 
        ,

        finish: {
          type: 'final'
        }
      }
    },
    rejected: {
      initial: 'can retry',
      states: {
        'can retry': {
          on: {
            '': {
              target: 'failure',
              cond: 'maxAttempts'
            }
          }
        },
        failure: {
          on: {
            RETRY: undefined,
          },
          type: 'final'
        }
      },
      on: {
        RETRY: 'outStandingPayment'
      }
    }
  }
}, {
  guards: {
    maxAttempts: ctx =>  ctx.attempts >= 5,
    YesOutstanding : ctx => ctx.outstandingPayment === "YES",
    NoOutstanding : ctx => ctx.outstandingPayment === "NO"
  },
  delays: {
    TIMEOUT: 2000
  }
});


export default fetchMachine