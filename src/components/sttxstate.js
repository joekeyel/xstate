


const sttMachine = Machine(
  {
      
id: 'stt',
initial: 'main',
context: {
  step: 0,
  log:["welcome"]
},

states: {
 
  
  main: {
    id: 'main',
    initial: 'welcome',
    
    states: {
        
      welcome: {
        on: {
          PROCEED: {
          target:'introduction' , actions:'logchoice'
          
   }
        }
      },
      introduction: {
        on: {
          PROCEED: {
              target:'service' , actions:'logchoice'
              
       }
        }
      },
      service: {
        on: {
          UNIFI: {
              target:'symptoms' , actions:'logchoice'
              
       },
          STREAMYX: {
              target:'symptoms' , actions:'logchoice'
              
         }
        }
      },
      symptoms: {
        on: {
          DISCONNECTED: {
              target:'cableCheck' , actions:'logchoice'
              
         },
          SLOW: {
              target:'speedTest' , actions:'logchoice'
              
         },
          WIFI_PROBLEM: {
              target:'isWifi' , actions:'logchoice'
              
         }
        }
      },
      speedTest: {
        on: {
          GOOD: {
            target:'end' , actions:'logchoice'
            
       },
          NOT_GOOD: {
            target:'otherChannel' , actions:'logchoice'
            
       }
         
        }
      },

      cableCheck: {
        on: { SOLVED:  {
          target:'end' , actions:'logchoice'
          
     }, STILL_NOT_OK:  {
      target:'btuSelection' , actions:'logchoice'
      
     } 
  }
      },

      end: {},
      btuSelection: {
        on: {
          FIBERHOME_AN5506_04B5G: {
              target:'rgSelection' , actions:'logchoice'
              
             } ,
          HUAWEI_HG8240H: {
              target:'rgSelection' , actions:'logchoice'
              
             },
          NOKIA_G_240G_EG: {
              target:'rgSelection' , actions:'logchoice'
              
             },
          ZTE_ZXHN_H267A: {
              target:'led' , actions:'logchoice'
              
             },
          NETIS_DL4480V: {
              target:'led' , actions:'logchoice'
              
             }
        }
      },
      rgSelection: {
        on: {
          DLINK_DIR_850L: {
              target:'led' , actions:'logchoice'
              
             },
          INNACOM_RGX4400: {
              target:'led' , actions:'logchoice'
              
             },
          TPLINK_ARCHER_C1200: {
              target:'led' , actions:'logchoice'
              
             },
          TPLINK_ARCHER_C5: {
              target:'led' , actions:'logchoice'
              
             },
          DLINK_DIR_842: {
              target:'led' , actions:'logchoice'
              
             }
        }
      },
      led: {
        on: {
          LIGHTS: { actions: () => null },
          DIAGNOSE: {
              target:'led' , actions:'dianogsis'
              
             }
        }
      },
      diagnosis: {
        on: { SELF_SOLVE: 'solution', NOT_SELF_SOLVE: 'otherChannel' }
      },
      solution: {
        on: { OK: 'end', NOT_OK: 'isWifi' }
      },
      isWifi: {
        on: {
          WIRED: 'speedTest',
          WIFI: 'wifiStrength',
          DISCONNECTED: 'deviceWifiConfiguration'
        }
      },
      wifiStrength: {
        on: {
          GOOD: 'speedTest',
          NOT_GOOD: 'wifiOptimization'
        }
      },
      
      deviceWifiConfiguration: {
        on: { CONNECTED: 'wifiStrength', NOT_CONNECTED: 'otherChannel' }
      },
      wifiOptimization: {
        on: {
          DONE: 'end',
          NOT_DONE: 'otherChannel'
        }
      },
      otherChannel: {},

      hist: {
          type: 'history',
          history: 'deep'
         
        }
      
    },
    on: {
       BACK:{
         get target(){
           
          if(sttMachine.context.step>1){
             textreturn = 'main.'+sttMachine.context.log[sttMachine.context.step-1].state
          }else{
            textreturn = "main.welcome"
          }
          
          return textreturn
         },
         actions:'backbutton'
       }
   ,
      RESET: 'main.welcome'
    }
  }
  
}
},
{
actions:{
  logchoice: (context, event,actionMeta) => {
      context.log.push({"state":actionMeta.state.value.main,"choice":event.type})
      context.step = context.step + 1
      
    },
    backbutton: (context, event, actionMeta) => {
    
     if(context.step>1){
        context.step = context.step - 1
     }
      
    }
},
guards:{

  cangoback: context => context.step > 1
}

}


)