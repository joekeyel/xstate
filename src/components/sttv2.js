const noInternet = {
  id: 'noInternet',
  initial: 'cableCheck',
  states: {
    cableCheck: {
      id: 'cableCheck',
      on: { DONE_CHECKING: 'btu', CONNECTION_RESTORED: '#isItOkNow' }
    },
    btu: {
      on: {
        FIBERHOME_AN5506_04B5G: 'btuLed',
        HUAWEI_HG8240H: 'btuLed',
        NOKIA_G_240G_EG: 'sbvmLed',
        ZTE_ZXHN_H267A: 'sbvmLed',
        NETIS_DL4480V: 'sbvmLed'
      },
      onExit: 'updateCpeModel'
    },
    btuLed: {
      on: {
        UPDATE_BTU_LED_LIGHTS: { actions: 'updateLed' },
        DIAGNOSE_LED: 'btuDiagnosis'
      }
    },
    btuDiagnosis: {
      onEntry: 'btuDiagnosis',
      on: {
        '': [
          { target: '#powerSolution', cond: 'powerSolution' },
          { target: '#fiberSolution', cond: 'fiberSolution' },
          { target: '#cpeSolution', cond: 'cpeSolution' },
          { target: '#rj45Solution', cond: 'rj45Solution' },
          { target: 'rg' }
        ]
      }
    },
    sbvmLed: {
      on: {
        UPDATE_SBVM_LED_LIGHTS: { actions: 'updateLed' },
        DIAGNOSE_LED: 'sbvmDiagnosis'
      }
    },
    sbvmDiagnosis: {
      onEntry: 'btuDiagnosis',
      on: {
        NO_ISSUE: '#tryReboot'
      }
    },
    rg: {
      on: {
        DLINK_DIR_850L: 'rgLed',
        INNACOM_RGX4400: 'rgLed',
        TPLINK_ARCHER_C1200: 'rgLed',
        TPLINK_ARCHER_C5: 'rgLed',
        DLINK_DIR_842: 'rgLed'
      },
      onExit: 'updateCpeModel'
    },
    rgLed: {
      on: {
        UPDATE_RG_LED_LIGHTS: { actions: 'updateLed' },
        DIAGNOSE_LED: 'rgDiagnosis'
      }
    },
    rgDiagnosis: {
      onEntry: 'rgDiagnosis',
      on: {
        NO_ISSUE: '#tryReboot'
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
    YES: '#thankYou',
    NO: '#tryAgain'
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
   
     DONE: '#isItOkNow'
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
  }
}

const actionsList = {
  logChoice: (context, event, actionMeta) => {
    mainMachine.context.log.push({ state: actionMeta.state.value, choice: event.type })
   
    mainMachine.context.step = mainMachine.context.step + 1
  },
  backButton: (context, event) => {
 
    if (mainMachine.context.step > 1) {
      mainMachine.context.step = mainMachine.context.step - 1
      console.log(mainMachine.context.step)
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
          
         
          var textreturn = "#main.start.intro"
          
          if(mainMachine.context.step>1){
          var state = JSON.stringify(mainMachine.context.log[mainMachine.context.step - 1].state)
           var statechild = state.replace("{\"","") 
           var statechild2 = statechild.replace("\"}","") 
           var statechild3 = statechild2.replace("\":\"",".") 
           
            textreturn = "#main."+statechild3
           
          } else{
            textreturn = "#main.start.intro"
          } 
          
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
  switch (cpe) {
    case 'FIBERHOME_AN5506_04B5G':
      const { power, pon, los, lan1 } = leds
      if (power === 'off') return 'powerIssue'
      if (power === 'green') {
        if (pon === 'off') return 'fiberIssue'
        if (los === 'off' || los === 'greenBlinking') return 'cpeIssue'
        if (lan1 === 'off') return 'rj45Issue'
      }
      break
    default:
      return 'noIssue'
  }
}