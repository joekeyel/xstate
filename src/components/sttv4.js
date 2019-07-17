const noInternet = {
  id: 'noInternet',
  initial: 'cableCheck',
  states: {
    cableCheck: {
      id: 'cableCheck',
      on: { DONE_CHECKING: {target:'btu',actions:'logChoice'}, CONNECTION_RESTORED:{target:'#isItOkNow',actions:'logChoice'} }
    },
    btu: {
      on: {
        FIBERHOME_AN5506_04B5G: {target:'btuLed',actions:'logChoice'},
        HUAWEI_HG8240H: {target:'btuLed',actions:'logChoice'},
        NOKIA_G_240G_EG: {target:'btuLed',actions:'logChoice'},
        ZTE_ZXHN_H267A: {target:'btuLed',actions:'logChoice'},
        NETIS_DL4480V: {target:'btuLed',actions:'logChoice'},
        TPLINK_ARCHER_VR1200V: {target:'btuLed',actions:'logChoice'}
      },
      onExit: 'updateCpeModel'
    },
    btuLed: {
      on: {
        UPDATE_BTU_LED_LIGHTS: { actions: ['updateLed'] },
        DIAGNOSE_LED: {target:'btuDiagnosis',actions:'logChoice'}
      }
    },
    btuDiagnosis: {
      onEntry: 'btuDiagnosis',
      on: {
        '': [
          { target: '#powerSolution', cond: 'powerSolution',actions:'logChoice' },
          { target: '#fiberSolution', cond: 'fiberSolution',actions:'logChoice' },
          { target: '#cpeSolution', cond: 'cpeSolution',actions:'logChoice' },
          { target: '#rj45Solution', cond: 'rj45Solution' ,actions:'logChoice'},
          { target: 'rg',actions:'logChoice' }
        ]
      }
    },
    sbvmLed: {
      on: {
        UPDATE_SBVM_LED_LIGHTS: { actions: ['updateLed'] },
        DIAGNOSE_LED: {target:'sbvmDiagnosis',actions:'logChoice'}
      }
    },
    sbvmDiagnosis: {
      onEntry: 'btuDiagnosis',
      on: {
        NO_ISSUE: {target:'#tryReboot',actions:'logChoice'}
      }
    },
    rg: {
      on: {
        DLINK_DIR_850L: {target:'rgLed',actions:'logChoice'},
        INNACOM_RGX4400: {target:'rgLed',actions:'logChoice'},
        TPLINK_ARCHER_C1200: {target:'rgLed',actions:'logChoice'},
        TPLINK_ARCHER_C5: {target:'rgLed',actions:'logChoice'},
        DLINK_DIR_842: {target:'rgLed',actions:'logChoice'}
      },
      onExit: 'updateCpeModel'
    },
    rgLed: {
      on: {
        UPDATE_RG_LED_LIGHTS: { actions: ['updateLed','logChoice'] },
        DIAGNOSE_LED: {target:'rgDiagnosis',actions:'logChoice'}
      }
    },
    rgDiagnosis: {
      onEntry: 'rgDiagnosis',
      on: {
        NO_ISSUE: {target:'#tryReboot',actions:'logChoice'}
      }
    }
  }
}

const wifiProblem = {
  id: 'wifiProblem'
}
const slowConnection = {
  id: 'slowConnection'
}

const start = {
  id: 'start',
  initial: 'welcome',
  states: {
    welcome: {
      id: 'welcome',
      on: {
        PROCEED: {target:'intro',actions:'logChoice'}
      },
     
      meta: {
        question: 'This is the first',
        choices: { proceed: { text: 'Proceed', event: 'PROCEED' } }
      }
    },
    intro: {
      on: {
        GET_STARTED:{target: '#basicsQuestions',actions:'logChoice'}
      },
     
      meta: {
        question: 'Intro stuff',
        choices: { getStarted: { text: 'Get Started', event: 'GET_STARTED' } }
      }
    }
  }
}

const basics = {
  id: 'basicsQuestions',
  initial: 'service',
  states: {
    service: {
      on: {
        UNIFI:{ target:'symptom' , actions:'logChoice'},
        STREAMYX: {target:'symptom', actions:'logChoice'}
      },
      onExit: ['updateService'],

      meta: {
        question: 'What service you using?',
        choices: {
          unifi: { text: 'unifi', event: 'UNIFI' },
          streamyx: { text: 'Streamyx', event: 'STREAMYX' }
        }
      }
    },
    symptom: {
      on: {
        NO_INTERNET: {target:'#noInternet',actions:'logChoice'},
        SLOW_CONNECTION:{ target:'#slowConnection',actions:'logChoice'},
        WIFI_PROBLEM:{ target:'#wifiProblem',actions:'logChoice'}
      },
      onExit: ['updateSymptom']
    }
  }
}

const ok = {
  id: 'isItOkNow',
  on: {
    YES: { target:'#thankYou',actions:'logChoice'},
    NO: { target:'#tryAgain',actions:'logChoice'}
  }
}

const tryAgain = {
  id: 'tryAgain',
  on: {
    NO_INTERNET:{ target:'#noInternet',actions:'logChoice'},
    SLOW_CONNECTION: {target:'#slowConnection',actions:'logChoice'},
    WIFI_PROBLEM: {target:'#wifiProblem',actions:'logChoice'},
    OTHER_CHANNEL:{target: '#tryOtherChannel',actions:'logChoice'}
    
  }
}

const end = {
  states: {
   
    thanks: {
      id: 'thankYou'
    },
    otherChannel: {
      id: 'tryOtherChannel'
    }
  }
}

const solutions = {
  id: 'trySolution',
  on: {
   
     DONE: {target: '#isItOkNow',actions:'logChoice'}
        },
  states: {
    reboot: {
      id: 'tryReboot'
    },
    speed: {
      id: 'speedSolution'
    },
    wifi: {
      id: 'wifiSolution'
    },
    power: {
      id: 'powerSolution'
    },
    fiber: {
      id: 'fiberSolution'
    },
    cpe: {
      id: 'cpeSolution'
    },
    rj45: {
      id: 'rj45Solution'
    }
  }
}

const initialContext = {
  step: 0,
  log: [{"state": {
    "start": "welcome"
  },
  "choice": "PROCEED"
}],
  service: '',
  symptom: '',
  diagnosis: '',
  btu: { model: '', leds: {}, ledsOptions: {} },
  rg: { model: '', leds: {}, ledsOptions: {} }
}

const cpeDetails = {
  FIBERHOME_AN5506_04B5G: {
    type: 'btu',
    leds: {
      power: {
        text: 'Power',
        options: ['off', 'green']
      },
      pon: {
        text: 'PON',
        options: ['off', 'green']
      },
      los: {
        text: 'LOS',
        options: ['off', 'green', 'greenBlinking']
      },
      lan1: {
        text: 'Lan 1',
        options: ['off', 'green', 'greenBlinking']
      }
    }
  },
  HUAWEI_HG8240H:{
      type: 'btu',
      leds: {
      power: {
          text: 'Power',
          options: ['off', 'green']
      },
      pon: {
          text: 'PON',
          options: ['off', 'green']
      }, 
      los: {
          text: 'LOS',
          options: ['off', 'greenStable','greenBlinking']
      },
      lan1: {
          text: 'Lan 1',
          options: ['off', 'green','greenBlinking']
      }
      } 
  },
  Nokia_G_240G_E:{
      type: 'btu',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'green']
          },
          link: {
              text: 'Link',
              options: ['off', 'green']
          }, 
          auth: {
              text: 'Auth',
              options: ['off', 'green']
          },
          lan1: {
              text: 'Lan 1',
              options: ['off', 'green','greenBlinking']
          }
      } 
  },
  ZTE_ZXHN_H267A:{
      type: 'btu',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'green']
          },
          dsl: {
              text: 'DSL',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          internet: {
              text: 'Internet',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          twodotfourghz: {
              text: '2.4 GHz',
              options: ['off', 'any', 'greenBlinking']
          },
          fiveghz: {
              text: '5 GHz',
              options: ['off', 'any', 'greenBlinking']
          } 
      }
  },
  NETIS_DL4480V:{
      type: 'btu',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'green']
          },
          dsl: {
              text: 'DSL',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          internet: {
              text: 'Internet',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          wlan: {
              text: 'WLAN',
              options: ['off', 'any', 'greenBlinking', 'blueBlinking']
          }
      }   
  },
  TPLINK_ARCHER_VR1200V:{
      type: 'btu',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'green']
          },
          dsl: {
              text: 'DSL',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          internet: {
              text: 'Internet',
              options: ['off', 'any', 'green', 'greenBlinking']
          },
          wlan: {
              text: 'WLAN',
              options: ['off', 'any', 'greenBlinking']
          }
      }
  },
  DLINK_DIR_850L: {
    type: 'rg',
    leds: {
      power: {
        text: 'Power',
        options: ['off', 'orange']
      },
      internet: {
        text: 'Internet',
        options: ['off', 'green']
      }
    }
  },
  Innacomm_RGX4400:{
      type: 'rg',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'red', 'white']
          },
          wan: {
              text: 'WAN',
              options: ['off', 'any', 'white']
          },
          internet: {
              text: 'Internet',
              options: ['off', 'any', 'red', 'whiteBlinking']
          },
          two_dot_four_ghz: {
              text: '2.4 GHz',
              options: ['off', 'any', 'white', 'whiteBlinking']
          },
          five_ghz: {
              text: '5 GHz',
              options: ['off', 'any', 'white', 'whiteBlinking']
          }    
      }    
  },
  TPLINK_ARCHER_C1200:{
      type: 'rg',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'green']
          },
          wirelesstwodotfourghz:{
              text: 'Wireless 2.4GHz',
              options: ['off', 'any', 'greenBlinking']
          },
          wirelessfiveghz:{
              text: 'Wireless 2.4GHz',
              options: ['off', 'any', 'greenBlinking']
          },
          internet:{
              text: 'Internet',
              options: ['off', 'any', 'orange','greenBlinking']
          }
      }   
  },
  TPLINK_ARCHER_C5:{
    type: 'rg',
    leds: {
      power: {
          text: 'Power',
          options: ['off', 'green']
      },
      wirelesstwodotfourghz:{
          text: 'Wireless 2.4GHz',
          options: ['off', 'any', 'greenBlinking']
      },
      wirelessfiveghz:{
          text: 'Wireless 2.4GHz',
          options: ['off', 'any', 'greenBlinking']
      },
      internet:{
          text: 'Internet',
          options: ['off', 'any', 'orange','greenBlinking']
      }
    }  
  },
  DLINK_DIR_842:{
      type: 'rg',
      leds: {
          power: {
              text: 'Power',
              options: ['off', 'any', 'green','greenBlinking','greenBlinkingFast']
          },
          internet:{
              text: 'Internet',
              options: ['off', 'any', 'green']
          },
          wlan: {
              text: 'WLAN',
              options: ['off', 'any', 'green']
          }
      }   
  }
}

const actionsList = {
  logChoice: (context,event, actionMeta) => {
    mainMachine.context.log.push({ state: actionMeta.state.value, choice: event.type })
   
    mainMachine.context.step = mainMachine.context.step + 1
  },
  backButton: () => {
 
    if (mainMachine.context.log.length > 1) {
     
      mainMachine.context.log.pop()

    }
   
  },
  btuDiagnosis: XState.assign({
    diagnosis: ({ btu: { model, leds } }) => cpeDiagnosis({ cpe: model, leds })
  }),
  rgDiagnosis: XState.assign({
    diagnosis: ({ rg: { model, leds } }) => cpeDiagnosis({ cpe: model, leds })
  }),
  resetContext: XState.assign(context => ({
    ...initialContext
  })),
  updateService: XState.assign({
    service: (context, event) => event.type
  }),
  updateSymptom: XState.assign({
    symptom: (context, event) => event.type
  }),
  updateCpeModel: XState.assign((context, event) => {
    const { type: cpeType } = (cpeDetails || {})[event.type] || {}
    const ledsOptionsArray = Object.entries(((cpeDetails || {})[event.type] || {}).leds || {}) || []
    let ledsDefault = {}
    let ledsOptions = {}
    ledsOptionsArray.forEach(led => {
      ledsDefault[led[0]] = led[1].options[0]
      ledsOptions[led[0]] = led[1].options
    })
    if (cpeType === 'btu') {
      return {
        ...context,
        btu: { ...context.btu, model: event.type, leds: ledsDefault, ledsOptions }
      }
    }
    if (cpeType === 'rg') {
      return {
        ...context,
        rg: { ...context.rg, model: event.type, leds: ledsDefault, ledsOptions }
      }
    }
  }),
  updateLed: XState.assign((context, event) => {
    const { type, leds = {} } = event
    if (Object.keys(leds).length === 0 && leds.constructor === Object) return
    switch (type) {
      case 'UPDATE_BTU_LED_LIGHTS':
        return { ...context, btu: { ...context.btu, leds } }
      case 'UPDATE_RG_LED_LIGHTS':
        return { ...context, rg: { ...context.rg, leds } }
      case 'UPDATE_SBVM_LED_LIGHTS':
        return { ...context, btu: { ...context.btu, leds } }
      default:
        return
    }
  })
}

const guards = {
  powerSolution: ({ diagnosis }) => diagnosis === 'powerIssue',
  fiberSolution: ({ diagnosis }) => diagnosis === 'fiberIssue',
  cpeSolution: ({ diagnosis }) => diagnosis === 'cpeIssue',
  rj45Solution: ({ diagnosis }) => diagnosis === 'rj45Issue'
}
const mainMachine = Machine(
  {
    id: 'main',
    initial: 'start',
    context: {
      step: 0,
      log: [{"state": {
        "start": "welcome"
      },
      "choice": "PROCEED"
    }],
      service: '',
      symptom: '',
      diagnosis: '',
      btu: { model: '', leds: {}, ledsOptions: {} },
      rg: { model: '', leds: {}, ledsOptions: {} }
    },
    on: {
      RESET: { target: 'basics', actions: 'resetContext' },
      BACK: {
        get target() {

          
          console.log(mainMachine.context.step)
          
         
          var textreturn = "start.welcome"
          
          if(mainMachine.context.log.length>1){

          var state = JSON.stringify(mainMachine.context.log[mainMachine.context.log.length - 2].state)
           var statechild = state.replace("{\"","") 
           var statechild2 = statechild.replace("\"}","") 
           var statechild3 = statechild2.replace("\":\"",".") 
           var statechild4 = statechild3.replace("\":{\"",".")
           var statechild5 = statechild4.replace("}","")
           var statechild6 = statechild5.replace("\"","")
           var statechild7 = statechild6.replace("\"","")
           
           textreturn = statechild7
           
          } 

          console.log(textreturn)
          
          return textreturn
        },
        actions: 'backButton'
      }
    },
    states: {
      start,
      basics,
      diagnostics: {
        states: { noInternet, slowConnection, wifiProblem }
      },
      solutions,
      ok,
      tryAgain,
      end
    }
  },
  {
    actions :actionsList,
    guards
  }
)

function cpeDiagnosis({ cpe, leds = {} }) {
  const { power, pon, los,link, auth, lan1,dsl,internet,twodotfourghz,fiveghz,wlan,wan,wirelesstwodotfourghz,wirelessfiveghz } = leds
  switch (cpe) {
    case 'FIBERHOME_AN5506_04B5G':
      
      if (power === 'off') return 'powerIssue'
      if (power === 'green') {
        if (auth === 'off' && link === 'redBlinking' && lan1 === 'off') return 'fiberIssue'
        if (auth === 'off' && link === 'redStable' && (lan1 === 'green' || lan1 === 'greenBlinking')) return 'cpeIssue'
        if (auth === 'green' && link === 'redStable' && lan1 === 'off') return 'rj45Issue'
      }
      break
      case 'HUAWEI_HG8240H':
          
          if (power === 'off') return 'powerIssue' 
          if (power === 'green') {
            if (pon === 'off' && los === 'greenStable' && (lan1 === 'green' || lan1 === 'greenBlinking')) return 'fiberIssue'
            if (pon === 'green' && los === 'off' && (lan1 === 'green' || lan1 === 'greenBlinking' )) return 'cpeIssue'
            if (pon === 'green' && los === 'greenBlinking' && (lan1 === 'green' || lan1 === 'greenBlinking' )) return 'cpeIssue' 
            if (pon === 'green' && los === 'greenStable' && lan1 === 'off' ) return 'rj45Issue' 
          }
          break 
      case 'NOKIA_G_240G_E': 
          
          if (power === 'off') return 'powerIssue' 
          if (power === 'green') {
              if (link === 'off' && auth === 'off' && (lan1 === 'green' || lan1 === 'greenBlinking')) return 'fiberIssue'
              if (link === 'green' && auth === 'off' && (lan1 === 'green' || lan1 === 'greenBlinking' )) return 'cpeIssue'
              if (link === 'green' && auth === 'green' && lan1 === 'off'  ) return 'rj45Issue' 
          }
      break
      case 'ZTE_ZXHN_H267A': 
          
          if (power === 'off') return 'powerIssue' 

          if (power === 'green') {
            //item 6
            if (dsl === 'green' && internet === 'greenBlinking' &&  twodotfourghz === 'off' && fiveghz === 'any') return 'cpeIssue'
           //item 7
            if (dsl === 'green' && internet === 'greenBlinking' &&  twodotfourghz === 'any' && fiveghz === 'off') return 'cpeIssue'
           //item 8 
            if (dsl === 'greenBlinking'  && internet === 'any' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'rj11Issue'
            //item 9
            if (dsl === 'off'  && internet === 'any' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'rj11Issue'
            // item 10
            if (dsl === 'green'  && internet === 'off' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'cpeIssue'
        }


          // if (power === 'green') {
          //     if ((dsl === 'green' || dsl === 'off' ) && (internet === 'greenBlinking' ||  internet === 'off') && (twodotfourghz === 'off' || twodotfourghz === 'any') && (fiveghz === 'any' || fiveghz === 'off' )) return 'cpeIssue'
          //     if ((dsl === 'greenBlinking' || dsl === 'off')  && internet === 'any' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'RJ11Issue'
          // }
      break
      case 'NETIS_DL4480V': 
          
          if (power === 'off') return 'powerIssue' 
          if (power === 'green') {
              if(dsl === 'green' && (internet === 'greenBlinking' || internet === 'any' || internet === 'off' )  && (wlan === 'off' || wlan === 'blueBlinking' || wlan === 'any' )) return 'cpeIssue'
              if ((dsl === 'greenBlinking' || dsl === 'off' )  && internet === 'any' && wlan === 'any'  ) return 'RJ11Issue'
          }
      break 
      case 'TPLINK_ARCHER_VR1200V': 
          if (power === 'off') return 'powerIssue' 
          if (power === 'green') {
              if(dsl === 'green' && (internet === 'greenBlinking' || internet === 'off' )  && (wlan === 'off' || wlan === 'any' )) return 'cpeIssue'
              if ((dsl === 'greenBlinking' || dsl === 'off' )  && internet === 'any' && wlan === 'any'  ) return 'RJ11Issue'
          }
      break
      case 'INNACOMM_RGX4400': 
          if (power === 'off') return 'powerIssue'
          if (power === 'red') return 'fiberIssue' 
          if (power === 'white') {
              if(wan === 'off' && internet === 'any' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'RJ45Issue'
              if(wan === 'white' && internet === 'red' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'off' && twodotfourghz === 'any' && fiveghz === 'any' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'white' && fiveghz === 'off' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'whiteBlinking' && fiveghz === 'off' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'white' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'whiteBlinking' ) return 'cpeIssue'
              if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'off' ) return 'cpeIssue'
          }
      break
      case 'TPLINK_ARCHER_C1200': 
          if (power === 'off') return 'powerIssue'
          if (power === 'green') {
              if(wirelesstwodotfourghz === 'any' && wirelessfiveghz === 'any' && internet === 'any'  ) return 'RJ45Issue'
              if(wirelesstwodotfourghz === 'any' && wirelessfiveghz === 'any' && internet === 'orange'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'off' && wirelessfiveghz === 'off' && internet === 'greenBlinking'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'off' && wirelessfiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'greenBlinking' && wirelessfiveghz === 'off' && internet === 'greenBlinking'  ) return 'cpeIssue'

          }
      break
      case 'TPLINK_ARCHER_C5': 
          if (power === 'off') return 'powerIssue'
          if (power === 'green') {
              if(wirelesstwodotfourghz === 'any' && wirelessfiveghz === 'any' && internet === 'off'  ) return 'RJ45Issue'
              if(wirelesstwodotfourghz === 'any' && wirelessfiveghz === 'any' && internet === 'orange'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'off' && wirelessfiveghz === 'off' && internet === 'greenBlinking'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'off' && wirelessfiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'cpeIssue'
              if(wirelesstwodotfourghz === 'greenBlinking' && wirelessfiveghz === 'off' && internet === 'greenBlinking'  ) return 'cpeIssue'

          }
      break
      case 'DLINK_DIR_842':
          if (power === 'off') return 'powerIssue'
          if (power === 'greenBlinking' && internet === 'any' && wlan === 'any' ) return 'cpeIssue'
          if (power === 'greenBlinkingFast' && internet === 'any' && wlan === 'any' ) return 'cpeIssue'         
          if (power === 'green' && internet === 'green' && wlan === 'off' ) return 'cpeIssue'
          if (power === 'any' && internet === 'OFF' && wlan === 'any' ) return 'RJ45Issue'
    default:
      return 'noIssue'
  }
}