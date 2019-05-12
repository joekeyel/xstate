
import { Machine,assign } from 'xstate'



const idaasConfig = {
  client_id: 'fb1a5e97-09fa-484d-85e4-82b4c92dcdbb',
  response_type: 'code',
  state: 'dummydummy', // HACK
  scope: 'openid offline profile national_id email phone address passport',
  prompt: 'consent',
  access_type: 'offline',
  usePkce: 'false',
  redirect_uri: 'http://localhost:3000/redirect',
  // redirect_uri: 'https://statecharts.github.io/xstate-viz/',
  redirect_uri_loggout: 'http://localhost:3000', // HACK,
  grant_type: 'authorization_code',
  grant_type_refresh_token: 'refresh_token',
  authorization_endpoint: 'https://staging-identity.nexlife.com.my/oauth2/authorize',
  token_endpoint: 'https://staging-identity.nexlife.com.my/oauth2/token',
  userinfo_endpoint: 'https://staging-identity.nexlife.com.my/userinfo',
  auth_call: function() {
    const uri = `${this.authorization_endpoint}?client_id=${this.client_id}&response_type=${
      this.response_type
    }&state=${this.state}&scope=${this.scope}&prompt=${this.prompt}&access_type=${
      this.access_type
    }&usePkce=${this.usePkce}`
    return `${encodeURI(uri)}&redirect_uri=${encodeURIComponent(this.redirect_uri)}`
  },
  token_request_body: function() {
    return `redirect_uri=${this.redirect_uri}&grant_type=${this.grant_type}&client_id=${
      this.client_id
    }`
    
  },
  refresh_token_body: function() {
    return `grant_type=${this.grant_type_refresh_token}&client_id=${
      this.client_id
    }&scope=${this.scope}`
  }
}

const context = {
  code: '',
  idaas: '',
  expired:'5',
  token_endpoint: idaasConfig.token_endpoint,
  auth_call: idaasConfig.auth_call(),
  idaasConfig,
  idaasUserInfo:'',
  hideloginbutton: false,
  hidelogoutbutton:true
}

const error = {
  initial: 'updatedError',
  on: {
    DISMISS: '#idaas.loggedOut.error.clearingError'
  },

  states: {
    updatedError: {
      after: {
        ERROR_TIMEOUT: 'clearingError'
      }
    },
    clearingError: {
      onEntry: 'clearErrorContext',
      on: { '': '#idaas.loggedOut.browsing' }
    }
  }
}




const callBack = {
  initial: 'parsingCode',
  states: {
    parsingCode: {
      onEntry: 'updateCodeToContext',
      on: {
        '': {
          target: 'evaluatingCode'
        }
      }
    },
    evaluatingCode: {
      on: {
        '': [
          { target: 'clearUrl', cond: 'codeExist' },
          {
            target: '#idaas.loggedOut.error',
            cond: 'codeDoesNotExist',
            actions: assign({ error: 'Error. Code is not valid. Please log in again' })
          }
        ]
      }
    }
    ,
    clearUrl: {
      onEntry: 'redirecttologout',
      on: {
        '': {
          target: '#idaas.loggedOut.loggingIn.gettingAccessToken'
        }
      }
    }
  }
}


const loggingIn = {
  initial: "redirecting",
  states: {
    redirecting: {
      onEntry: "redirect"
    },
    callBack,
    gettingAccessToken: {
      invoke: {
        id: "accessToken",
        src: (ctx, event) => {
          return fetch(ctx.token_endpoint, {
            method: "POST",
            body: `${ctx.idaasConfig.token_request_body()}&code=${ctx.code}`,
            headers: { "Content-type": "application/x-www-form-urlencoded" }
          })
            .then(response => response.json())
            .catch(error => console.error(error));
        },
        onDone: {
          target: "#idaas.loggedIn",
          actions: [
            assign({
              idaas: (ctx, event) => ({ ...event.data, timeStamp: new Date() })
            }),

            assign({ expired: (ctx, event) => event.data.expires_in }),

            "updateTokentolocalStrorage"
          ]
        },
        onError: {
          target: "#idaas.loggedOut.error",
          actions: assign({
            error: "Error. Failed to retrieve Access Token. Please log in again"
          })
        }
      }
    }
  }
};

const errorLogin = {
  initial: 'updatedError',
  on: {
    DISMISS: '#idaas.loggedIn.errorLogin.clearingError'
  },

  states: {
    updatedError: {
      after: {
        ERROR_TIMEOUT: 'clearingError'
      }
    },
    clearingError: {
      onEntry: 'clearErrorContext',
      on: { '': '#idaas.loggedIn.evaluatingToken' }
    }
  }
}


const checkOnStorage = {
  initial: 'checklocalStorage',
  states: {

   
  
  checklocalStorage:{
   on :{'':
    [
     {target:'checkContext',cond:'tokenNotExistIntStorage'},
     {target:'#idaas.loggedIn.refreshingToken',cond:'tokenExistIntStorage'}
    

    ]

   }
    },

    checkContext:{
      on :{'':
       [
        {target:'parsingCode',cond:'invalidtoken'},
        {target:'#idaas.loggedIn',cond:'validtoken'}
       
   
       ]
   
      }
       },
      parsingCode :{
      onEntry: 'updateCodeToContext',
      on: {
        '': {
          target: 'checkCode'
        }
      }
    },

       checkCode:{
        on :{'':
         [
          {target:'#idaas.loggedOut.browsing',cond:'codeDoesNotExist'},
          {target:'#idaas.loggedOut.loggingIn.callBack',cond:'codeExist'}
         
         ]
     
        }
         }
  }
   
}

const browsing = {


  
  on: {
    
    LOGIN: 'loggingIn',
    CALL_BACK: '#idaas.loggedOut.loggingIn.callBack'
  }
}

const loggedOut = {
  
  initial: 'checkOnStorage',
  states: {
    checkOnStorage,  
    browsing,
    loggingIn,
    error
  }
}

const loggedIn = {
  initial: 'evaluatingToken',
  
  states: {

    evaluatingToken: {
      on: {
        '': [
          { target: 'requestUserInfo', cond: 'validtoken' },
          {
            target: '#idaas.loggedOut.error',
            cond: 'invalidtoken'
           
          }
        ]
      }
    },

    requestUserInfo: {
      
     
      invoke: {
        id: 'accessToken',
        src: (ctx, event) => {
          return fetch(ctx.idaasConfig.userinfo_endpoint, {
            method: 'GET',
            headers: { 'Content-type': 'application/x-www-form-urlencoded' ,'Authorization' : 'Bearer ' + ctx.idaas.access_token}
          })
            .then(response => response.json(), console.log(ctx.idaasConfig.userinfo_endpoint+`?Authorization=${ctx.idaas.access_token}`))
            .catch(error => console.error(error))
        },
        onDone: {
         
        
          target:'#idaas.loggedIn.evaluatingUserInfo',
        
          actions: [
          assign({ idaasUserInfo: (ctx, event) => ({ ...event.data, timeStamp: new Date() }) }),

          assign({ hideloginbutton: (ctx,event) => (true)  }),

          assign({ hidelogoutbutton: (ctx,event) => (false)  }),

          'updateuserInfotolocalstorage'
        
        ]

         
        },
        onError: {
          target: '#idaas.loggedIn.errorLogin',
          actions: assign({ error: 'Error. Failed to retrieve Access Token. Please log in again' })
        }
      }
    },


    evaluatingUserInfo: {
      on: {
        '': [
          { target: 'countTokenExpired', cond: 'validuserinfo' },
          {
            target: '#idaas.loggedIn.errorLogin',
            cond: 'invaliduserinfo'
           
          }
        ]
      }
    },
    
    countTokenExpired : {

      type: 'parallel',

      states:{
         counting:{
           activities: ['beeping'],
            after:{
            
              
              REFRESH_TOKEN_TIME_TESTING :'#idaas.loggedIn.refreshingToken'
              
            }

          },
          
          processData:{
      
            on:{
      
                populateDatatoUi : {}
            }
      
      
      
          },

          loggingOut:{
      
            on:{
      
                LOGOUT : {

                  
                    target: '#idaas.loggedIn.delayChecking',
                    actions: 
                    [
                      
                    'clearLocalStorageIdaas',
                   
                      assign({ code: (ctx,event) => ('')  ,
                      idaasUserInfo: (ctx,event) => ('') ,
                      idaas: (ctx,event) => ('') ,
                      hideloginbutton: (ctx,event) => (false) ,
                      hidelogoutbutton: (ctx,event) => (true) 
                    
                    }),
                      
                      'redirecttologout'
                     
                    ]
                }
            }
      
      
          }


        
          
      }  
    },


    delayChecking :{

      after: {

        1000:'#idaas.loggedOut'
      }

    },         

    errorLogin,

    
    
    refreshingToken : {
      
     
      invoke: {
        id: 'accessToken',
        src: (ctx, event) => {
          return fetch(ctx.token_endpoint, {
            method: 'POST',
            body: `${ctx.idaasConfig.refresh_token_body()}&refresh_token=${window.localStorage.getItem("refresh_token")}`,
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
          }).then(response => response.json(),console.log(window.localStorage.getItem("refresh_token")))
           .catch(error => console.error(error))
        },
        onDone: {
          target: 'evaluatingRefreshToken',
          actions: [
            
            assign({ idaas: (ctx, event) => ({ ...event.data, timeStamp: new Date() }), }), 
            assign({ expired: (ctx,event) => (event.data.expires_in)   }),
            assign({ hideloginbutton: (ctx,event) => (true)  }),

            assign({ hidelogoutbutton: (ctx,event) => (false)  }),
            'updateTokentolocalStrorage'
           
          
          ]
        },
        onError: {
          target: '#idaas.loggedOut.error',
          actions: assign({ error: 'Error. Failed to retrieve Access Token. Please log in again' })
        }
      
      }
    },

    
    evaluatingRefreshToken: {
      on: {
        '': [
          { target: 'requestUserInfo', cond: 'validtoken' },
          {
            target: '#idaas.loggedOut.error',
            cond: 'invalidtoken'
           
          }
        ]
      }
    }

    
   
  }
}




const idaasMachine = Machine(
  {
    id: 'idaas',
    initial: 'loggedOut',
    context,
    states: {
      loggedOut,
      loggedIn
    }
  },
 
  {
    actions: {
      clearErrorContext: ()=> {assign({ error: '' })
      window.localStorage.clear()

      
      assign({ code: (ctx,event) => ('')  ,
      idaasUserInfo: (ctx,event) => ('') ,
      idaas: (ctx,event) => ('') ,
      hideloginbutton: (ctx,event) => (false) ,
      hidelogoutbutton: (ctx,event) => (true) })
      window.location.replace("http://localhost:3000")
      
    },
      redirect: (ctx, event) => {
        console.log('redirecting...')
        console.log(ctx.auth_call)
        window.location.replace(ctx.auth_call)
      },
      redirecttologout: (ctx,event) => {
        window.history.replaceState({}, document.title, '/')
      },
      updateCodeToContext: assign({
        code: (ctx, event) => {
          function getSearchObj() {
            const query = window.location.search.substring(1)
            const parameters = query.split('&')
            let parObj = {}
            parameters.forEach((value, index) => {
              const pair = value.split('=')
              parObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
            })
          
            return parObj
          }
          const { code } = getSearchObj()

        
          return code || ''
        }
      }),
      updateTokentolocalStrorage : (ctx,event) => {window.localStorage.setItem("idaas",JSON.stringify(event.data))
      window.localStorage.setItem("refresh_token",event.data.refresh_token)},
      updateuserInfotolocalstorage : (ctx,event)=>{window.localStorage.setItem("idaasUserinfo", JSON.stringify(event.data))},
      clearLocalStorageIdaas:(ctx,event)=> window.localStorage.clear(),
      clearLocalStorageIdaasUserInfo:(ctx,event)=> window.localStorage.removeItem("idaasUserinfo")
    },

    guards: {
      codeExist: ctx => ctx.code !== '',
      codeDoesNotExist: ctx => ctx.code === '',
      invalidtoken : ctx => ctx.idaas.access_token === undefined,
      validtoken : ctx => ctx.idaas.access_token !== undefined,
      tokenExistIntStorage: ()=>window.localStorage.getItem("idaas") !== null,
      tokenNotExistIntStorage: ()=>window.localStorage.getItem("idaas") === null,
      userInfoExistIntStorage: ()=>window.localStorage.getItem("idaasUserinfo") !== null,
      userInfoNotExistIntStorage: ()=>window.localStorage.getItem("idaasUserinfo") === null,
      invaliduserinfo : ctx => ctx.idaasUserInfo.name === undefined,
      validuserinfo : ctx => ctx.idaasUserInfo.name !== undefined
    },
    delays: {
      ERROR_TIMEOUT: 3000,
      REFRESH_TOKEN_TIME : (context, event) => {
        return parseInt(context.expired + "000") - 10000
      },
      REFRESH_TOKEN_TIME_TESTING: 10000
    },
    activities: {
      beeping: () => {
        // Start the beeping activity
        const interval = setInterval(() => console.log('BEEP!'), 1000);

        // Return a function that stops the beeping activity
        return () => clearInterval(interval);
      }
    }
  
  }
  

)


export default  idaasMachine





