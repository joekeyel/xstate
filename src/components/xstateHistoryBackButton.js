

const cpeDetails = {

    //BTU
    FIBERHOME_AN5506_04B5G: {
      type: 'btu',
      ledVertical:false,
      leds: {
        power: {
          text: 'Power',
          options: ['off', 'green']
        },
        auth: {
          text: 'Auth',
          options: ['off', 'green']
        },
        link: {
          text: 'Link',
          options: ['off', 'red', 'redBlinking']
        },
        lan1: {
          text: 'Lan 1',
          options: ['off', 'green', 'greenBlinking']
        }
      }
    },
    HUAWEI_HG8240H:{
        type: 'btu',
        ledVertical:false,
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
            options: ['off', 'green','greenBlinking']
        },
        lan1: {
            text: 'Lan 1',
            options: ['off', 'green','greenBlinking']
        }
        } 
    },
    NOKIA_G_240G_E:{
        type: 'btu',
        ledVertical:false,
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
    //SBVM
    ZTE_ZXHN_H267A:{
        type: 'SBVM',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green']
            },
            dsl: {
                text: 'DSL',
                options: ['off', 'green', 'greenBlinking']
            },
            internet: {
                text: 'Internet',
                options: ['off', 'green', 'greenBlinking']
            },
            twodotfourghz: {
                text: '2.4 GHz',
                options: ['off', 'greenBlinking']
            },
            fiveghz: {
                text: '5 GHz',
                options: ['off', 'greenBlinking']
            } 
        }
    },
    NETIS_DL4480V:{
        type: 'SBVM',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green']
            },
            dsl: {
                text: 'DSL',
                options: ['off', 'green', 'greenBlinking']
            },
            internet: {
                text: 'Internet',
                options: ['off', 'green', 'greenBlinking']
            },
            wlan: {
                text: 'WLAN',
                options: ['off', 'greenBlinking', 'blueBlinking']
            }
        }   
    },
    NETIS_DL4480V1:{
        type: 'SBVM',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green']
            },
            dsl: {
                text: 'DSL',
                options: ['off', 'green', 'greenBlinking']
            },
            internet: {
                text: 'Internet',
                options: ['off', 'green', 'greenBlinking']
            },
            wlan: {
                text: 'WLAN',
                options: ['off', 'greenBlinking', 'blueBlinking']
            }
        }   
    },
    TPLINK_ARCHER_VR1200V:{
        type: 'SBVM',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green']
            },
            dsl: {
                text: 'DSL',
                options: ['off', 'green', 'greenBlinking']
            },
            internet: {
                text: 'Internet',
                options: ['off', 'green', 'greenBlinking']
            },
            wlan_twodotfourghz: {
                text: 'WLAN 2.4',
                options: ['off', 'greenBlinking']
            },
            wlan_fiveghz: {
                text: 'WLAN 5Ghz',
                options: ['off', 'greenBlinking']
            }
        }
    },
    //ADSL

    ADSL:{
        type: 'ADSL',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'on']
            },
            dsl: {
                text: 'DSL',
                options: ['off', 'on']
            },
            wan: {
                text: 'WAN',
                options: ['off', 'on']
            },
            wifi: {
                text: 'WIFI',
                options:['off', 'on']
            },
            lan: {
                text: 'LAN',
                options:['off', 'on']
            },
            tel: {
                text: 'TEL',
                options:['off', 'on']
            }
        }   
    },
  
    //RG
    DLINK_DIR_850L: {
      type: 'rg',
      ledVertical:true,
      leds: {
        power: {
          text: 'Power',
          options: ['off','green', 'orange']
        },
        internet: {
          text: 'Internet',
          options: ['off', 'green', 'orange']
        }
      }
    },
    INNACOM_RGX4400:{
        type: 'rg',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'red', 'white']
            },
            wan: {
                text: 'WAN',
                options: ['off', 'white']
            },
            internet: {
                text: 'Internet',
                options: ['off', 'red', 'whiteBlinking']
            },
            twodotfourghz: {
                text: '2.4 GHz',
                options: ['off', 'white', 'whiteBlinking']
            },
            fiveghz: {
                text: '5 GHz',
                options: ['off', 'white', 'whiteBlinking']
            }    
        }    
    },
    TPLINK_ARCHER_C1200:{
        type: 'rg',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green']
            },
            twodotfourghz:{
                text: 'Wireless 2.4GHz',
                options: ['off', 'greenBlinking']
            },
            fiveghz:{
                text: 'Wireless 2.4GHz',
                options: ['off', 'greenBlinking']
            },
            internet:{
                text: 'Internet',
                options: ['off','orange','greenBlinking']
            }
        }   
    },
    TPLINK_ARCHER_C5:{
      type: 'rg',
      ledVertical:false,
      leds: {
        power: {
            text: 'Power',
            options: ['off', 'green']
        },
        twodotfourghz:{
            text: 'Wireless 2.4GHz',
            options: ['off', 'greenBlinking']
        },
        fiveghz:{
            text: 'Wireless 2.4GHz',
            options: ['off', 'greenBlinking']
        },
        internet:{
            text: 'Internet',
            options: ['off',  'orange','greenBlinking']
        }
      }  
    },
    DLINK_DIR_842:{
        type: 'rg',
        ledVertical:false,
        leds: {
            power: {
                text: 'Power',
                options: ['off', 'green','greenBlinking','greenBlinkingFast']
            },
            internet:{
                text: 'Internet',
                options: ['off', 'green']
            },
            wlan: {
                text: 'WLAN',
                options: ['off',  'green']
            }
        }   
    }
  }
const diagnoseBTUProblem = {
    id: 'diagnoseBTUProblem',
    on:{
        BACK:'#historyLED'
    },
    initial:'power_socket',
    states: {
        power_socket: {
            id: 'power_socket',
            onEntry:"setPowerSolution",
            on: {
                GOT_IT: {target: '#verifyIssues',actions:'logChoice'}
            },
            meta: {
                question: 'Seems like you might be  having a power socket issue. Try to unplug your equipment and use another power socket.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                choices: {
                    gotIt: { text: 'Got it', event: 'GOT_IT' },
                    back: { text:'Back' , event : 'BACK' }
                }
            }

        },
        fiber_faulty: {
            id: 'fiber_faulty',
            onEntry:"setFiberFaulty",
            on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'},
                back: { text:'Back' , event : 'BACK' }
            },
            meta: {
                question: 'Seems like you have an issues with your fiber cable. Fret not, you may proceed to our Live Chat for further assistance.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' },
                    back: { text:'Back' , event : 'BACK' }
                }
            }
        },
        btu_faulty: {
            id: 'btu_faulty',
            onEntry:"setBtuFaulty",
            on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'}
            },
            meta: {
                question: 'Seems like you have an issues with your device (BTU/SBVM). Fret not, you may proceed to our Live Chat for further assistance.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' },
                    back: { text:'Back' , event : 'BACK' }
                }
            }
        },
        rg_faulty: {
            id: 'rg_faulty',
            onEntry:"setRgFaulty",
            on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'}
            },
            meta: {
                question: 'Seems like you have an issues with your device (RG). Fret not, you may proceed to our Live Chat for further assistance.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' },
                    back: { text:'Back' , event : 'BACK' }
                }
            }
        },
        adsl_faulty: {
            id: 'adsl_faulty',
            onEntry:"setAdslFaulty",
            on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'}
            },
            meta: {
                question: 'Seems like you have an issues with your device (ADSL). Fret not, you may proceed to our Live Chat for further assistance.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' },
                    back: { text:'Back' , event : 'BACK' }
                }
            }
        },
        rj45: {
            id: 'rj45Solution',
            onEntry:'setRj45',
            on: {
                GOT_IT: {target: '#verifyIssues',actions:'logChoice'}
            },
            meta: {
                question: 'Seems like you might be having a cable  issue. Try replacing your RJ45 cable which is connected to the Internet/WAN port.',
                notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                choices: {
                    gotIt: { text: 'Got it', event: 'GOT_IT' },
                    back: { text:'Back' , event : 'BACK' }  
                }
            }
        },
        rj11: {
             id: 'rj11Solution',
             onEntry:'setRj11',
             on: {
                GOT_IT: {target: '#verifyIssues',actions:'logChoice'}
            },
             meta: {
                 question: 'Seems like you might be having a cable  issue. Try replacing your RJ11 cable which is connected to the DSL port.',
                 notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                 choices: {
                    gotIt: { text: 'Got it', event: 'GOT_IT' },
                    back: { text:'Back' , event : 'BACK' }  
                 }
             }
        },
        reconfigure_wifi: {
             id: 'reconfigure_wifi',
             onEntry:'setReconfigureWifi',
             on: {
                GOT_IT: {target: '#verifyIssues',actions:'logChoice'}
            },
             meta: {
                 question: 'Seems like you might need to reconfigure your Wi-Fi.',
                 notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                 choices: {
                    gotIt: { text: 'Got it', event: 'GOT_IT' },
                    back: { text:'Back' , event : 'BACK' }  
                 }
             }
        },
        network: {
             id: 'network',
             onEntry:"setNetwork",
             on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'}
            },
             meta: {
                 question: 'Seems like you have an issues with your internet connection. Fret not, you may proceed to our Live Chat for further assistance.',
                 notes:"Click the copy button, and paste this summary during your chat with our live chat agent",
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' },
                    back: { text:'Back' , event : 'BACK' }
                }
             }
        },
        history:{
            id:'historyDiagnose',
            type:'history'
        }
    }
}
const verifyIssues = {
    initial: 'verifyIssues',
    states: {
        verifyIssues:{
            id: 'verifyIssues',
            on: {
                YES: { target:'#thankYou',actions:'logChoice'},
                NO: { target:'#proceedLiveChat',actions:'logChoice'},
                BACK:'#historyDiagnose'
            },
            meta: {
                question: 'Has your issue been resolved?',
                choices: {
                    yes: { text: 'YES', event: 'YES' },
                    no: { text: 'NO', event: 'NO' },
                }
            }
        }
    }
} 

const proceedLiveChat = {
    initial: 'proceedLiveChat',
    states: {
        proceedLiveChat:{
            id:'proceedLiveChat',
            on: {
                PROCESS_TO_LIVE_CHAT: { target:'#summaryLiveChat',actions:'logChoice'},
                NO_THANKS_YOU: { target:'#refuseLiveChat',actions:'logChoice'},
            },
            meta: {
                question: 'Sorry that your issue has still not been resolved. Fret not, you may proceed to our Live Chat for further assistance.',
                summary : true,
                choices: {
                    proceedToLiveChat: { text: 'Proceed to Live Chat', event: 'PROCESS_TO_LIVE_CHAT' },
                    noThankYou: { text: 'No, thank you', event: 'NO_THANKS_YOU' }
                }
            }
        }
    }
}

const summaryLiveChat ={
    initial: 'summaryLiveChat',
    states: {
        summaryLiveChat: {
            id: 'summaryLiveChat',
            on: {
                COPY: { target:'',actions:['copyClipboard', 'logChoice']},
                PROCEED: { target:'',actions:['windowOpen', 'logChoice']},
            },
            meta: {
                summary: true,
                question: 'Sorry that your issue has still not been resolved. Fret not, you may proceed to our Live Chat for further assistance.',
                summary: true,
                choices: {
                    copy: { text: 'Copy', event: 'COPY' },
                    proceed: { text: 'Proceed', event: 'PROCEED' }
                }
            }
         
        }
    }
}

const thankYou = {
    initial: 'thankYou',
    states: {
        thankYou:{
            id:'thankYou',
            on: {
                BACK_TO_HOME: { target:'#welcomePage',actions:'logChoice'}
            },
            meta: {
                question: 'Great!! We would be glad if you can share your great experience with your friends  :-)',
                choices: {
                    BACK_TO_HOME: { text: 'Back to Home', event: 'BACK_TO_HOME' }
                }
            }
        }
    }
}

const refuseLiveChat = {
    initial: 'refuseLiveChat',
    states: {
        refuseLiveChat:{
            id:'refuseLiveChat',
            on: {
                BACK_TO_HOME: { target:'#welcomePage',actions:'logChoice'}
            },
            meta: {
                question: 'Thanks for using EasyFix. Please come back should you have other issues regarding your service.  ',
                choices: {
                    BACK_TO_HOME: { text: 'Back to Home', event: 'BACK_TO_HOME' }
                }
            }
        }
    }
}

const welcomePage = {
    initial: 'welcomePage',
    states: {
        welcomePage: {
            id: 'welcomePage',
            on: {
                PROCEED: {target:'#verifyProblem',actions:'logChoice'}
            },
            meta: {
                question: 'Hi! Welcome to EasyFix. This is a faster alternative to help you solve your unifi issue.',
                notes: 'Please ensure that your account is still active. To check log on to <a href="https://unifi.com.my/">myUnifi Portal</a> or through <a href="">myunifi app</a>.',
                choices: {
                    proceed: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}

const verifyProblem = {
   
    initial: 'verifyProblem',
    states: {
        verifyProblem: {
            id: 'verifyProblem',
            on: {
                INTERNET_CONNECT: {target:'#internetService',actions:'logChoice'},
                BACK:'#welcomePage'
               // UNIFI_TV:{ target:'#verifyProblem',actions:'logChoice'},
              //  VOICE:{ target:'#symptomDEL',actions:'logChoice'}
            },
            meta: {
                question: 'Let’s choose the service that you would want to troubleshoot.',
                choices: {
                    internetConnection: { text: 'Internet Connection', event: 'INTERNET_CONNECT' },
                    unifiTv: { text: 'unifi TV', event: 'UNIFI_TV' },
                    voice: { text: 'Voice (Home Phone)', event: 'VOICE' }
                }
            }
        }
    }
}  

const internetService = {
    initial: 'internetService',
    states: {
        internetService: {
            id: 'internetService',
            on: {
                UNIFI: {target:'#verifySymptom',actions:'logChoice'},
                STREAMYX:{ target:'#verifySymptom',actions:'logChoice'},
                BACK:'#verifyProblem'
            },
            onExit: ['updateService'],
            meta: {
                question: 'Now, let’s choose your subscribed service.',
                choices: {
                    unifi: { text: 'unifi', event: 'UNIFI' },
                    streamyx: { text: 'Streamyx', event: 'STREAMYX' }
                }
            }
        }
    }
}  



const verifySymptom = {
    initial: 'verifySymptom',
    states: {
        verifySymptom: {
            id: 'verifySymptom',
            on: {
                NO_INTERNET: {target:'checkService'},
                SLOW_CONNECTION:{target:'checkService'},
                WIFI_PROBLEM:{target:'checkService'},
                BACK:'#internetService'
            },
            meta: {
                question: 'What issue are you experiencing with your service?',
                choices: {
                    noInternet: { text: 'No internet', event: 'NO_INTERNET' },
                    slowConnection: { text: 'Slow connection', event: 'SLOW_CONNECTION' },
                    wifiProblem: { text: 'Wi-Fi problem', event: 'WIFI_PROBLEM' }
                }
            }
        },
        checkService:{
            id:'checkService',
            on: {
                '': [ 
                        {target: '#checkCableUnifi', cond: 'checkUnifiCondition', actions:'logChoice'  },
                        {target: '#checkCableSTX', cond: 'checkSTXCondition', actions:'logChoice'  }
                    ]
            }
        }
    }
}

const checkCableUnifi = {
    initial: 'checkCableUnifi',
    states: {
        checkCableUnifi: {
            id:'checkCableUnifi',
            on: {
                OK: {target:'#rebootUnifi',actions:'logChoice'},
                BACK: {target:'#verifySymptom'}
            },
            meta: {
                question: 'Typical setups for your home equipments are shown below. You can select the diagram for further details and counter check with your  home setup, to check your physical connection.',
                infoHorizontal:true,
                choices: {
                    ok: { text: 'Ok', event: 'OK' },
                }
            }
        }
    }
}


const rebootUnifi ={
    initial: 'rebootUnifi',
    states: {
        rebootUnifi: {
            id:'rebootUnifi',
            on: {
                PROCEED: {target:'#verifyUnifiStatus',actions:'logChoice'},
                BACK:{target:'#checkCableUnifi'}
            },
            meta: {
                question: 'For this troubleshooting exercise, let’s reboot all your equipments.',
                info:{
                    text:"Show me how to?",
                    target:"reboot-cpe"
                },
                notes:"Rebooting your equipments is the easiest way to eliminate device overload processes that may impact its performance.",
                choices: {
                    proceed: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}


const checkCableSTX ={
    initial: 'checkCableSTX',
    states: {
        checkCableSTX: {
            id:'checkCableSTX',
            on: {
                OK: {target:'#rebootSTX',actions:'logChoice'}
            },
            meta: {
                question: 'Typical setups for your home equipments are shown below. You can select the diagram for further details and counter check with your  home setup, to check your physical connection.',
                infoHorizontal:true,
                choices: {
                    Ok: { text: 'OK', event: 'OK' },
                }
            }
        }
    }
}


const rebootSTX ={
    initial: 'rebootSTX',
    states: {
        rebootSTX: {
            id:'rebootSTX',
            on: {
                PROCEED: {target:'#verifySTXStatus',actions:'logChoice'}
            },
            meta: {
                question: 'For this troubleshooting exercise, let’s reboot all your equipments',
                info:{
                    text:"Show me how to?",
                    target:"detailed-reboot-STX"
                },
                notes:"Rebooting your equipments is the easiest way to eliminate device overload processes that may impact its performance.",
                choices: {
                    Ok: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}

const verifyUnifiStatus = {
    initial: 'verifyUnifiStatus',
    states: {
        verifyUnifiStatus: {
            id: 'verifyUnifiStatus',
            on: {
                NO: {target:'#thankYou',actions:'logChoice'},
                YES: {target:'#selectBTU',actions:'logChoice'},
                BACK: {target:'#rebootUnifi'}
            },
            meta: {
                question: 'Are you still having problems with your service after checking your physical connections? ',
                choices: {
                    no: { text: 'My issue is resolved!', event: 'NO' },
                    yes: { text: 'Continue troubleshooting', event: 'YES' },
                }
            }
        }
    }
}

const verifySTXStatus =  {
    initial: 'verifySTXStatus',
    states: {
        verifySTXStatus: {
            id: 'verifySTXStatus',
            on: {
                NO: {target:'#thankYou',actions:'logChoice'},
                YES: {target:'#selectModem',actions:'logChoice'}
            },
            meta: {
                question: 'Are you still having problems with your service after checking your physical connections? ',
                choices: {
                    no: { text: 'My issue is resolved!', event: 'NO' },
                    yes: { text: 'Continue troubleshooting', event: 'YES' },
                }
            }
        }
    }
}




const diagnoseBTUOK = {
    initial: 'diagnoseBTUOK',
    states: {
        diagnoseBTUOK: {
            id: 'diagnoseBTUOK',
            on: {
                CONTINUE_TROUBLESHOOT: {target:'#rg',actions:'logChoice'},
                MY_ISSUE_IS_RESOLVED: {target:'#thankYou',actions:'logChoice'},
                BACK : {target:'#matchLedBTU'}
            },
            meta: {
                question: 'Seems like you don’t have any issues with your device (BTU). Has your issue been resolved, or would you like to continue with the next troubleshooting?',
                choices: {
                    continueTroubleshooting: { text: 'Continue Troubleshooting', event: 'CONTINUE_TROUBLESHOOT' },
                    myIssueIsResolved: { text: 'My issue is resolved', event: 'MY_ISSUE_IS_RESOLVED' },
                    back : { text: 'Back' , event : 'BACK' }
                }
            }
        }
    }
}

const diagnoseSBVMOK = {
    initial: 'diagnoseSBVMOK',
    states: {
        diagnoseSBVMOK: {
            id: 'diagnoseSBVMOK',
            on: {
                CONTINUE_TROUBLESHOOT: {target:'#connectionType',actions:'logChoice'},
                MY_ISSUE_IS_RESOLVED: {target:'#thankYou',actions:'logChoice'},
                BACK : {target:'#historyLED'}
            },
            meta: {
                question: 'Seems like you don’t have any issues with your device (BTU). Has your issue been resolved, or would you like to continue with the next troubleshooting?',
                choices: {
                    continueTroubleshooting: { text: 'Continue Troubleshooting', event: 'CONTINUE_TROUBLESHOOT' },
                    myIssueIsResolved: { text: 'My issue is resolved', event: 'MY_ISSUE_IS_RESOLVED' },
                    back : { text: 'Back' , event : 'BACK' }
                }
            }
        }
    }
}


const diagnoseRGOK = {
    initial: 'diagnoseRGOK',
    states: {
        diagnoseRGOK: {
            id: 'diagnoseRGOK',
            on: {
                CONTINUE_TROUBLESHOOT: {target:'#connectionType',actions:'logChoice'},
                MY_ISSUE_IS_RESOLVED: {target:'#thankYou',actions:'logChoice'},
                BACK : {target:'#historyLED'}
            },
            meta: {
                question: 'Seems like you don’t have any issues with your Residential Gateway (RG). Has your issue been resolved or would you like to continue with the next troubleshooting?',
                choices: {
                    continueTroubleshooting: { text: 'Continue Troubleshooting', event: 'CONTINUE_TROUBLESHOOT' },
                    myIssueIsResolved: { text: 'My issue is resolved', event: 'MY_ISSUE_IS_RESOLVED' },
                    back : { text: 'Back' , event : 'BACK' }
                }
            }
        }
    }
}


const diagnosCPEOK = {
    id: 'diagnosCPEOK',
    initial : 'diagnoseRGOK',
    states:{
        
        diagnoseSBVMOK,
        diagnoseRGOK,
        history:{
            id: 'historyCPEOK',
            type : 'history'
        }

    }

}

const symptomDEL = {
    initial: 'symptomDEL',
    states: {
        symptomDEL: {
            id: 'symptomDEL',
            on: {
                YES: {target:'#checkCableDEL',actions:'logChoice'},
                NO: {target:'#checkCableDEL',actions:'logChoice'}
            },
            meta: {
                question: 'Are you able to use your telephone service?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}

const checkCableDEL = {
    initial: 'checkCableDEL',
    states: {
        checkCableDEL: {
            id: 'checkCableDEL',
            on: {
                OK: {target:'#verifyDialTone',actions:'logChoice'}
            },
            meta: {
                question: 'Typical setups for your home equipment are shown below. You can select the diagram for further details and counter check with your  home setup, to check your physical connection.',
                choices: {
                    ok: { text: 'OK', event: 'OK' }
                }
            }
        }
    }
}



const verifyDialTone = {
    initial: 'verifyDialTone',
    states: {
        verifyDialTone: {
            id: 'verifyDialTone',
            on: {
                YES: {target:'#testCall',actions:'logChoice'},
                NO: {target:'#proceedLiveChat',actions:'logChoice'}
            },
            meta: {
                question: 'Can you hear a dial tone when you pick up the phone?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}


const testCall = {
    initial: 'testCall',
    states: {
        testCall: {
            id: 'testCall',
            on: {
                YES: {target:'#qualityIssue',actions:'logChoice'},
                NO: {target:'#proceedLiveChat',actions:'logChoice'}
            },
            meta: {
                question: 'Let\'s check your line by making an outgoing call. Dial 1313 and you should be able to hear a notification stating your phone number.',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}



const qualityIssue = {
    initial: 'qualityIssue',
    states: {
        qualityIssue: {
            id: 'qualityIssue',
            on: {
                YES: {target:'#proceedLiveChat',actions:'logChoice'},
                NO: {target:'#thankYou',actions:'logChoice'}
            },
            meta: {
                question: 'So far your telephone is working fine. Are you experiencing any quality issues? Let us know by clicking the below',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}

const connectionType = {
    initial: 'connectionType',
    states: {
        connectionType:{
            id:'connectionType',
            on: {
                WIRED: { target:'checkService',actions:'logChoice'},
                WIRELESS: { target:'#checkWifi',actions:'logChoice'},
                BACK:'#historyCPEOK'
            },
            meta: {
                question: 'Which of the below connection type would you want to troubleshoot?',
                notes:'Ensure that your device is connected to unifi/streamyx',
                choices: {
                    wired: { text: 'Wired (Laptop, desktop)', event: 'WIRED' },
                    Wireless: { text: 'Wireless (Smartphone, tablet, laptop)', event: 'WIRELESS' }
                   
                }
            }
        },
        checkService:{
            on: {
                '': [ 
                        {target: '#selectSpeedUnifi', cond: 'checkUnifiCondition', actions:'logChoice'  },
                        {target: '#selectSpeedStreamyx', cond: 'checkSTXCondition', actions:'logChoice'  }
                    ]
            }
        }
    }
}

const selectSpeedUnifi = {
    initial: 'selectSpeedUnifi',
    states: {
        selectSpeedUnifi:{
            id:'selectSpeedUnifi',
            on: {
                800: { target:'#speedTest',actions:'logChoice'},
                500: { target:'#speedTest',actions:'logChoice'},
                300: { target:'#speedTest',actions:'logChoice'},
                100: { target:'#speedTest',actions:'logChoice'},
                50: { target:'#speedTest',actions:'logChoice'},
                30: { target:'#speedTest',actions:'logChoice'},
                10: { target:'#speedTest',actions:'logChoice'},
                BACK:'#connectionType'
                
            },
            meta: {
                question: 'What’s the package speed that you have subscribed to?',
                choices: {
                    800: { text: '800Mbps', event: '800' },
                    500: { text: '500Mbps', event: '500' },
                    300: { text: '300Mbps', event: '300' },
                    200: { text: '200Mbps', event: '200' },
                    100: { text: '100Mbps', event: '100' },
                    50: { text: '50Mbps', event: '50' },
                    30: { text: '30Mbps', event: '30' },
                    10: { text: '10Mbps', event: '10' }
                   
                }
            }
        }
    }
}

const selectSpeedStreamyx = {
    initial: 'selectSpeedStreamyx',
    states: {
        selectSpeedStreamyx:{
            id:'selectSpeedStreamyx',
            on: {
                10: { target:'#speedTest',actions:'logChoice'},
                8: { target:'#speedTest',actions:'logChoice'},
                5: { target:'#speedTest',actions:'logChoice'},
                3: { target:'#speedTest',actions:'logChoice'},
                1: { target:'#speedTest',actions:'logChoice'},
                BACK:'#connectionType'
            },
            meta: {
                question: 'What’s the package speed that you have subscribed to?',
                choices: {
                    10: { text: '10Mbps', event: '10' },
                    8: { text: '8Mbps', event: '8' },
                    5: { text: '5Mbps', event: '5' },
                    3: { text: '3Mbps', event: '3' },
                    1: { text: '1Mbps', event: '1' },
                    BACK: { text:'Back',event:'BACK'}
                }
            }
        }
    }
}


const selectSpeed = {
    id:'selectSpeed',
    initial:'selectSpeedUnifi',
    states:{
        selectSpeedUnifi,
        selectSpeedStreamyx,
        history:{
            id: 'historySelectSpeed',
            type: 'history'
        }
    }
}

const speedTest = {
    initial: 'speedTest',
    onEntry: 'setConnectionProblem',
    onExit: 'setspeedTest',
    states: {
        speedTest:{
            id:'speedTest',
            on: {
                YES: { target:'#verifyProblem',actions:'logChoice'},
                NO: { target:'#improveSpeed',actions:'logChoice'},
            },

            meta: {
                question: '',
                notes: 'Visit speedtest.tm.com.my to perform speedtest',
                choices: {
                        yes: { text: 'Yes', event: 'YES' },
                        no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}

const improveSpeed = {
    initial: 'improveSpeed',
    states: {
        improveSpeed:{
            id:'improveSpeed',
            on: {
                PROCEED: { target:'#speedVerifyProblem',actions:'logChoice'},
            },
            meta: {
                question: 'You can improve your internet speed on a wired connectivity by using a suitable ethernet cable (CAT 5e or above) and Gigabit ethernet card.',
                info:{
                    text:"Show me how to?",
                    target:"improve-speed"
                },
               choices: {
                    proceed: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}

const speedVerifyProblem = {
    initial: 'speedVerifyProblem',
    states: {
        speedVerifyProblem:{
            id:'speedVerifyProblem',
            on: {
                YES: { target:'#thankYou',actions:'logChoice'},
                NO: { target:'#proceedLiveChat',actions:'logChoice'},
            },
            meta: {
                question: 'Has your issue been resolved?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}

const checkWifi  = {
    initial: 'checkWifi',
    states: {
        checkWifi:{
            id:'checkWifi',
            onExit:"setwifi",
            on: {
                YES: { target:'#optimizeWifi',actions:'logChoice'},
                NO: { target:'#setupWifi',actions:'logChoice'},
            },
            meta: {
                question: 'First of all, can you check and let us know whether your end device (laptop, handphone or PC) is connected to your Home Wi-Fi?',
               choices: {
                    yes: { text: 'Yes, I\'m connected', event: 'YES' },
                    no: { text: 'No, I\'m not connected', event: 'NO' }
                }
            }
        }
    }
}

const optimizeWifi = {
    initial: 'optimizeWifi',
    states: {
        optimizeWifi:{
            id:'optimizeWifi',
            on: {
               
                PROCEED: { target:'#verifyProblem',actions:'logChoice'},
            },
            meta: {
                question: 'There are few factors that may affect your Wi-Fi signal strength.',
                info:{
                    text:"Things that affect your Wi-Fi strength",
                    target:"optimize-guideline"
                },
               choices: {
                    proceed: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}

const setupWifi = {
    initial: 'setupWifi',
    states: {
        setupWifi:{
            id:'setupWifi',
            on: {
                PROCEED: { target:'#verifyConnection',actions:'logChoice'},
               
            },
            meta: {
                question: 'Different devices may require different setup configurations. Kindly ensure that your devices are connected to your home Wi-Fi.',
                info:{
                    text:"How to connect to your Home Wi-Fi",
                    target:"setup-wifi-guideline"
                },
               choices: {
                    proceed: { text: 'Proceed', event: 'PROCEED' },
                }
            }
        }
    }
}


const verifyConnection = {
    initial: 'verifyConnection',
    states: {
        verifyConnection:{
            id:'verifyConnection',
            on: {
                YES: { target:'#verifyDefects',actions:'logChoice'},
                NO: { target:'#referDeviceProvider',actions:'logChoice'},
            },
            meta: {
                question: 'Were you able to connect to your home Wi-Fi after the exercise?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' },
                }
            }
        }
    }
}

const verifyIssue = {
    states: {
        verifyIssue:{
            id:'verifyIssue',
            on: {
                YES: { target:'#proceedLiveChat',actions:'logChoice'},
                NO: { target:'#thankYou',actions:'logChoice'},
            },
            meta: {
                question: 'Has your issue been resolved?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' }
                }
            }
        }
    }
}

const verifyDefects = {
    states: {
        verifyDefects:{
            id:'verifyDefects',
            on: {
                YES: { target:'#proceedLiveChat',actions:'logChoice'},
                NO: { target:'#thankYou',actions:'logChoice'},
            },
            meta: {
                question: 'Great! We would like to confirm if you are still having any connection issues?',
                choices: {
                    yes: { text: 'Yes', event: 'YES' },
                    no: { text: 'No', event: 'NO' }
                }
            }
        }
    }
}

const referDeviceProvider = {
    states: {
        referDeviceProvider:{
            id:'referDeviceProvider',
            on: {
                GOT_IT: { target:'#thankYou',actions:'logChoice'},
            },
            meta: {
                question: 'I\'m afraid that you might have a problem with your personal device (ie :Smartphone/ handphone/ tablet). It’s best if you can refer to your device manual or  contact your device manufacturer.',
                choices: {
                    gotIt: { text: 'Got it', event: 'GOT_IT' },
                }
            }
        }
    }
}

const selectCPE = {
     id:'selectCPE',
     initial:'selectBTU',
    states: {
        selectBTU: {
            id: 'selectBTU',
            on: {
                FIBERHOME_AN5506_04B5G: {target:'#matchLedBTU',actions:'logChoice'},
                HUAWEI_HG8240H: {target:'#matchLedBTU',actions:'logChoice'},
                NOKIA_G_240G_E: {target:'#matchLedBTU',actions:'logChoice'},
                ZTE_ZXHN_H267A: {target:'#matchLedBTU',actions:'logChoice'},
                NETIS_DL4480V: {target:'#matchLedBTU',actions:'logChoice'},
                NETIS_DL4480V1: {target:'#matchLedBTU',actions:'logChoice'},
                TPLINK_ARCHER_VR1200V:{target:'#matchLedBTU',actions:'logChoice'},
                BACK:'#verifyUnifiStatus'
            },
            onExit: 'updateCpeModel',
            meta: {
                question: 'Now, let\'s identify which type of device (BTU/SBVM) you are using. Choose one of the below:',
                horizontal:true,
                choices: {
                    FIBERHOME_AN5506_04B5G: { text: 'FIBERHOME AN5506-04B5G', event: 'FIBERHOME_AN5506_04B5G' },
                    HUAWEI_HG8240H: { text: 'HUAWEI HG8240H', event: 'HUAWEI_HG8240H' },
                    NOKIA_G_240G_E: { text: 'Nokia G-240G-E', event: 'NOKIA_G_240G_E' },
                    ZTE_ZXHN_H267A: { text: 'ZTE ZXHN H267A', event: 'ZTE_ZXHN_H267A' },
                    NETIS_DL4480V: { text: 'Netis DL4480V', event: 'NETIS_DL4480V' },
                    NETIS_DL4480V1: { text: 'Netis DL4480-V1', event: 'NETIS_DL4480V1' },
                    TPLINK_ARCHER_VR1200V: { text: 'TPLink Archer VR1200v', event: 'TPLINK_ARCHER_VR1200V' },
                    BACK:{ text:'Back' , event:'BACK'}
                }
            }
        },
        selectModem:{
            id: 'selectModem',
            on: {
                ZTE_ZXHN_H267A: {target:'#matchLedBTU',actions:'logChoice'},
                NETIS_DL4480V: {target:'#matchLedBTU',actions:'logChoice'},
                NETIS_DL4480V1: {target:'#matchLedBTU',actions:'logChoice'},
                TPLINK_ARCHER_VR1200V:{target:'#matchLedBTU',actions:'logChoice'},
                ADSL:{target:'#matchLedBTU',actions:'logChoice'},
                BACK:'#verifySTXStatus'
            },
            onExit: 'updateCpeModel',
            meta: {
                question: 'Now, let\'s identify which type of device (SBVM/ADSL) you are using. Choose one of the below:',
                horizontal:true,
                choices: {
                    ZTE_ZXHN_H267A: { text: 'ZTE ZXHN H267A', event: 'ZTE_ZXHN_H267A' },
                    NETIS_DL4480V: { text: 'Netis DL4480V & Netis DL4480-V1', event: 'NETIS_DL4480V' },
                    NETIS_DL4480V1: { text: 'Netis DL4480-V1', event: 'NETIS_DL4480V1' },
                    TPLINK_ARCHER_VR1200V: { text: 'TPLink Archer VR1200v', event: 'TPLINK_ARCHER_VR1200V' },
                    ADSL: { text: 'TPLink Archer VR1200v', event: 'TPLINK_ARCHER_VR1200V' },
                    BACK: { text:'Back', event:'BACK'}
                }
            }
        },
        rg: {
            id:"rg",
            on: {
              DLINK_DIR_850L: {target:'#rgLed',actions:'logChoice'},
              INNACOM_RGX4400: {target:'#rgLed',actions:'logChoice'},
              TPLINK_ARCHER_C1200: {target:'#rgLed',actions:'logChoice'},
              TPLINK_ARCHER_C5: {target:'#rgLed',actions:'logChoice'},
              DLINK_DIR_842: {target:'#rgLed',actions:'logChoice'},
              BACK:'#diagnoseBTUOK'
            },
            onExit: 'updateCpeModel',
            meta: {
                question: 'Now let’s  select your Residential Gateway (RG) type. Choose one of the below:',
                horizontal:true,
                choices: {
                    DLINK_DIR_850L: { text: 'DLINK DIR 850L', event: 'DLINK_DIR_850L' },
                    INNACOM_RGX4400: { text: 'Innacomm RGX4400', event: 'INNACOM_RGX4400' },
                    TPLINK_ARCHER_C1200: { text: 'TPLINK Archer C1200', event: 'TPLINK_ARCHER_C1200' },
                    TPLINK_ARCHER_C5: { text: 'TPLINK ARCHER C5', event: 'TPLINK_ARCHER_C5' },
                    DLINK_DIR_842: { text: 'DLINK DIR 842', event: 'DLINK_DIR_842' },
                    BACK: { text:'Back' , event:'BACK'}
                }
            }
          },
        history:{
            id:'cpeHistory',
            type:'history'
        }
    }

}

const selectLED = {
    id:'selectLED',
    initial :'matchLedBTU',
    states:{
        matchLedBTU: {
            id: 'matchLedBTU',
            on: {
                UPDATE_BTU_LED_LIGHTS: { actions: ['updateLed'] },
                DIAGNOSE_LED: {target:'#btuDiagnosis',actions:'logChoice'},
                BACK:'#selectBTU'
            },
            meta: {
                question: 'Tap on the LED lights on the diagram below to match the LED lights on your device (BTU/SBVM). Then let\'s start to diagnose.',
                internal:true,
                internalEvent:'UPDATE_BTU_LED_LIGHTS',
                notes:"You can tap multiple times to change the LED colour in the diagram.",
                choices: {
                    diagnoseLed: { text: 'Diagnose', event: 'DIAGNOSE_LED' },
                    back:{text:'Back',event:'BACK'}
                }
            }
        },
        rgLed: {
            id:'rgLed',
            on: {
              UPDATE_RG_LED_LIGHTS: { actions: ['updateLed','logChoice'] },
              DIAGNOSE_LED: {target:'#rgDiagnosis',actions:'logChoice'},
              BACK:'#cpeHistory'
            },
            meta: {
                question: 'Tap on the LED lights on the diagram below to match the LED lights on your device (BTU/SBVM). Then let’s start to diagnose.',
                internal: true,
                internalEvent: 'UPDATE_RG_LED_LIGHTS',
                choices: {
                  diagnoseLed: { text: 'Diagnose', event: 'DIAGNOSE_LED' },
                  back:{text:'Back',event:'BACK'}
                }
            }

          },
        history:{
            id:'historyLED',
            type:'history'
        }
    }
}


const selectBTU = {
    id:'selectBTU',
    initial: 'selectCPE',
       states:{
        selectCPE,   
        selectLED,
        btuDiagnosis: {
            id:'btuDiagnosis',
            onEntry: 'btuDiagnosis',
            on: {
              '': [
                { target: '#diagnoseBTUOK', cond: 'noIssueBTU',actions:'logChoice' },
                { target: '#diagnoseSBVMOK', cond: 'noIssueSBVM',actions:'logChoice' },    
                { target: '#power_socket', cond: 'power_socket',actions:'logChoice' },
                { target: '#fiber_faulty', cond: 'fiber_faulty',actions:'logChoice' },
                { target: '#btu_faulty', cond: 'btu_faulty',actions:'logChoice' },
                { target: '#rg_faulty', cond: 'rg_faulty',actions:'logChoice' },
                { target: '#adsl_faulty', cond: 'adsl_faulty',actions:'logChoice' },
                { target: '#rj45Solution', cond: 'rj45Solution' ,actions:'logChoice'},
                { target: '#rj11Solution', cond: 'rj11Solution' ,actions:'logChoice'},
                { target: '#network', cond: 'network' ,actions:'logChoice'},
                { target: '#reconfigure_wifi', cond: 'reconfigure_wifi' ,actions:'logChoice'}
              ]
            },
            meta: {
                question: '',
                choices: {
               }
            }
        },
      
         
          rgDiagnosis: {
              id:'rgDiagnosis',
            onEntry: 'rgDiagnosis',
            on: {
             
              '': [
                { target: '#diagnoseRGOK', cond:'noIssueRG',actions:'logChoice' },  
                { target: '#power_socket', cond: 'power_socket',actions:'logChoice' },
                { target: '#btu_faulty', cond: 'btu_faulty',actions:'logChoice' },
                { target: '#rg_faulty', cond: 'rg_faulty',actions:'logChoice' },
                { target: '#adsl_faulty', cond: 'adsl_faulty',actions:'logChoice' },
                { target: '#rj45Solution', cond: 'rj45Solution' ,actions:'logChoice'},
                { target: '#rj11Solution', cond: 'rj11Solution' ,actions:'logChoice'},
                { target: '#network', cond: 'network' ,actions:'logChoice'},
                { target: '#reconfigure_wifi', cond: 'reconfigure_wifi' ,actions:'logChoice'},
              ]
            },
            meta: {
                question: '',
                choices: {
               }
            }
          }
         
    }
}



const actionsList = {
    copyClipboard:(context, event, actionMeta)=>{
        var checkCondition = document.getElementById("copyClipboard");
        if(!checkCondition){
            var div = document.createElement("textarea");
            div.id ="copyClipboard";
        }
        else{
            var div = checkCondition;
            div.innerHTML ="";
        }
        div.innerHTML +="Check physical setup connection - completed \n";
        div.innerHTML +="Reboot equipment - completed \n";
        div.innerHTML +="BTU/SBVM - "+context.summaryLiveChat.modelName.replace(/[_]/g," ")+"\n";
        var led ='(';
        Object.entries(context.summaryLiveChat.leds).forEach(([key, val]) => {
            led +=key.toUpperCase()+' : '+val.toUpperCase()+', ';
        });
        
        led = led.substring(0, led.length-2);
        led +=')';
        div.innerHTML +="Light Status - "+led+" \n";
        
        if(context.summaryLiveChat.rgModelName !=""){
            var rgled ='(';
            div.innerHTML +="RG - "+context.summaryLiveChat.rgModelName.replace(/[_]/g," ")+"\n";
            Object.entries(context.summaryLiveChat.rgLeds).forEach(([key, val]) => {
                rgled +=key.toUpperCase()+' : '+val.toUpperCase()+', ';
            });
            rgled = rgled.substring(0, rgled.length-2);
            rgled +=')';
            div.innerHTML +="Light Status - "+rgled+" \n";
        }
        if(context.summaryLiveChat.solution)
        div.innerHTML +="Solution performed - I have changed the power socket \n";
        if(context.summaryLiveChat.potential)
        div.innerHTML +="Potential problem - faulty device (BTU/SBVM) \n";
        div.innerHTML +="Need Live Chat assistance \n";
        document.body.appendChild(div);
        var copyText = document.getElementById("copyClipboard");
        copyText.select();
        document.execCommand("copy"); 
    },
    windowOpen: (context, event, actionMeta) => {
        window.open("https://unifi.com.my/chat/index.html");
    },
    logChoice: (context, event, actionMeta) => {
        console.log(actionMeta)

        let choices = Object.values(actionMeta.state.history.meta)[0].choices;
        let choicesArrays= Object.values(choices);
        let type = event.type;
        let choicesText ='';
        choicesArrays.forEach(val => {if(val.event ===  type ){choicesText = val.text;}});


        // to update the previouse question to meta
        const previousQuestion ={
            question:Object.values(actionMeta.state.history.meta)[0].question,
            selectedAnswer:choicesText
        }
        Object.assign(Object.values(actionMeta.state.meta)[0],{previousQuestion: previousQuestion});




        let question = getQuestion(context, event, actionMeta);
        mainMachine.context.log.push({ state: actionMeta.state.value, choice: event.type,question: question,choicetext: choicesText})
    },
    backButton: ( context, event, actionMeta) => {
      if (mainMachine.context.log.length > 1) {
       
        mainMachine.context.log.pop()
  
      }
      
    },
    setPowerSolution:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"changed the power socket",
                potential:"faulty device (BTU/SBVM)"
            })
        
    }),
    setFiberFaulty:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"",
                potential:"fiber cable faulty"
            })
        
    }),
    setBtuFaulty:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"",
                potential:"device (BTU/SBVM) faulty"
            })
        
    }),
    setRgFaulty:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"",
                potential:"device (RG) faulty"
            })
        
    }),
    setAdslFaulty:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"",
                potential:"device (RG) faulty"
            })
        
    }),
    setNetwork:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"",
                potential:"internet connection"
            })
        
    }),
    setReconfigureWifi:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"reconfigured Wi-Fi",
                potential:"Wi-Fi misconfiguration"
            })
        
    }),
    setRj45:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"replaced RJ45 cable",
                potential:"faulty device (BTU/SBVM) LAN port"
            })
        
    }),
    setRj11:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                solution:"replaced RJ11 cable",
                potential:"faulty device (BTU/SBVM) DSL port"
            })
        
    }),
    setConnectionProblem:assign({
        summaryLiveChat:(context, event, actionMeta) => 
            ({
                service:context.service,
                modelName:context.btu.model,
                type: findModemType(cpeDetails,context.btu.model),
                leds:context.btu.leds,
                rgType:"rg",
                rgModelName:context.rg.model,
                rgLeds:context.rg.leds,
                speedPackage:event.type,
                speedTest:speedTestCal(context,event),

            })
        
    }),
    setwifi:assign({
        summaryLiveChat:(context, event, actionMeta) => 
        ({
            service:context.service,
            modelName:context.btu.model,
            type: findModemType(cpeDetails,context.btu.model),
            leds:context.btu.leds,
            rgType:"rg",
            rgModelName:context.rg.model,
            rgLeds:context.rg.leds,
            connectionWifi:event.type
        })
    }),
    setspeedTest:assign({
        summaryLiveChat:(context, event, actionMeta) => 
        ({
            ...context.summaryLiveChat,
            isSpeedTest:event.type

        })
        
    }),
    updateService:assign({
        service: (context, event) => event.type
    }),
    btuDiagnosis: XState.assign({
        diagnosis: ({ btu: { model, leds } }) => cpeDiagnosis({ cpe: model, leds })
    }),
    rgDiagnosis: XState.assign({
        diagnosis: ({ rg: { model, leds } }) => cpeDiagnosis({ cpe: model, leds })
      }),
    updateCpeModel: XState.assign((context, event) => {
        const { type: cpeType } = (cpeDetails || {})[event.type] || {}
        const { ledVertical: orientation } = (cpeDetails || {})[event.type] || {}
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
            btu: { ...context.btu, model: event.type, leds: ledsDefault, ledsOptions, ledVertical:orientation}
          }
        }
        if (cpeType === 'SBVM') {
         
            return {
              ...context,
              btu: { ...context.btu, model: event.type, leds: ledsDefault, ledsOptions, ledVertical:orientation }
            }
          }
        if (cpeType === 'rg') {
          return {
            ...context,
            rg: { ...context.rg, model: event.type, leds: ledsDefault, ledsOptions, ledVertical:orientation }
          }
        }
    }),
    updateLed: XState.assign((context, event) => {
        const { type, leds = {}, options = [], ledId, currentColor } = event
        if (Object.keys(leds).length === 0 && leds.constructor === Object) return
        console.log('currentColor: ', currentColor)
        console.table(options)
        const currentIndex = options.findIndex(k => k === currentColor)
        console.log('currentIndex: ', currentIndex)
        const newIndex = currentIndex === options.length - 1 ? 0 : currentIndex + 1
        console.log('newIndex: ', newIndex)
        const newColor = options[newIndex]
        console.log('newColor: ', newColor)
    
        let updateLeds = leds
        updateLeds[ledId] = newColor
    
        console.log('-------------------')
        console.log(JSON.stringify(updateLeds, null, 2))
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

    checkUnifiCondition: context  => context.service == 'UNIFI',
    checkSTXCondition: context  => context.service == 'STREAMYX',
    noIssueBTU: ({ diagnosis }) => diagnosis === 'noIssueBTU',
    noIssueRG: ({ diagnosis }) => diagnosis === 'noIssueRG',
    noIssueSBVM: ({ diagnosis }) => diagnosis === 'noIssueSBVM',
    power_socket : ({ diagnosis }) => diagnosis === 'powerIssue',
    fiber_faulty: ({ diagnosis }) => diagnosis === 'fiber_faulty',
    btu_faulty: ({ diagnosis }) => diagnosis === 'btu_faulty',
    rg_faulty: ({ diagnosis }) => diagnosis === 'rg_faulty',
    adsl_faulty: ({ diagnosis }) => diagnosis === 'adsl_faulty',
    reconfigure_wifi: ({ diagnosis }) => diagnosis === 'reconfigure_wifi',
    network: ({ diagnosis }) => diagnosis === 'network',
    rj45Solution: ({ diagnosis }) => diagnosis === 'rj45Issue',
    rj11Solution: ({ diagnosis }) => diagnosis === 'rj11Issue',
    historybtu:(context,event,actionMeta)=> actionMeta.state.history.value === 'matchLedBTU'
  }
 
const mainMachine = Machine(
    {
      id: 'main',
      initial: 'welcomePage',
      context: {
        log: [{"state": {
          "welcomePage": "welcomePage"
        },
        "choice": "PROCEED"
      }],
        service: '',
        summaryLiveChat:[],
        choicesText:'',
        symptom: '',
        diagnosis: '',
        btu: { model: '', leds: {}, ledsOptions: {} },
        rg: { model: '', leds: {}, ledsOptions: {} }
      },
      on: {
        RESET: { target: '', actions: 'resetContext' }
        // BACK: {
        //    target:'#cpeHistory',
        //     actions: 'backButton'
        //   }
      },
      states: 
            {
                welcomePage,
                verifyProblem,
                internetService,
                verifySymptom,
                checkCableUnifi,
                rebootUnifi,
                checkCableSTX,
                rebootSTX,
                verifyUnifiStatus,
                verifySTXStatus,
                symptomDEL,
                checkCableDEL,
                verifyDialTone,
                testCall,
                qualityIssue,
                selectBTU,
                diagnoseBTUProblem,
                verifyIssues,
                diagnoseBTUOK,
                diagnosCPEOK,
                connectionType,
                selectSpeed,
                speedTest,
                improveSpeed,
                speedVerifyProblem,
                checkWifi,
                optimizeWifi,
                setupWifi,
                verifyConnection,
                verifyIssue,
                verifyDefects,
                referDeviceProvider,
                thankYou,
                proceedLiveChat,
                refuseLiveChat,
                summaryLiveChat
            }
    },
    {
        actions :actionsList,
        guards
    });
function cpeDiagnosis({ cpe, leds = {} }) {
const { power, wan, pon, los,link, auth, lan1,dsl,internet,twodotfourghz,fiveghz,wlan,dls,wifi ,wlan_twodotfourghz,wlan_fiveghz} = leds
switch (cpe) {
    //btu
    case 'FIBERHOME_AN5506_04B5G':
    
    if (power === 'off') return 'powerIssue'
    if (power === 'green') {
        if (auth === 'green' && link === 'red' && lan1 === 'green') return 'noIssueBTU'
        if (auth === 'green' && link === 'red' && lan1 === 'greenBlinking') return 'noIssueBTU'
        if (auth === 'off' && link === 'redBlinking' && lan1 === 'off') return 'fiber_faulty'
        if (auth === 'off' && link === 'red' && lan1 === 'green' ) return 'btu_faulty'
        if (auth === 'off' && link === 'red' && lan1 === 'greenBlinking') return 'btu_faulty'
        if (auth === 'green' && link === 'red' && lan1 === 'off') return 'rj45Issue'
        else return 'btu_faulty'
    }
    break
    case 'HUAWEI_HG8240H':
        
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            if (pon === 'green' && los === 'green' && lan1 === 'green' ) return 'noIssueBTU'
            if (pon === 'green' && los === 'green' && lan1 === 'greenBlinking' ) return 'noIssueBTU'
            if (pon === 'off' && los === 'green' && lan1 === 'green' ) return 'fiber_faulty'
            if (pon === 'off' && los === 'green' &&  lan1 === 'greenBlinking') return 'fiber_faulty'
            if (pon === 'green' && los === 'off' && lan1 === 'green' ) return 'btu_faulty'
            if (pon === 'green' && los === 'off' && lan1 === 'greenBlinking' ) return 'btu_faulty'
            if (pon === 'green' && los === 'greenBlinking' && lan1 === 'green' ) return 'btu_faulty'
            if (pon === 'green' && los === 'greenBlinking' && lan1 === 'greenBlinking' ) return 'btu_faulty'  
            if (pon === 'green' && los === 'green' && lan1 === 'off' ) return 'rj45Issue' 
            else return 'btu_faulty'
        }
        break 
    case 'NOKIA_G_240G_E': 
        
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            if (link === 'green' && auth === 'green' && lan1 === 'green' ) return 'noIssueBTU'
            if (link === 'green' && auth === 'green' && lan1 === 'greenBlinking' ) return 'noIssueBTU'
            if (link === 'off' && auth === 'off' && lan1 === 'green' ) return 'fiber_faulty'
            if (link === 'off' && auth === 'off' && lan1 === 'greenBlinking') return 'fiber_faulty'
            if (link === 'green' && auth === 'off' && lan1 === 'green' ) return 'btu_faulty'
            if (link === 'green' && auth === 'off' && lan1 === 'greenBlinking' ) return 'btu_faulty'
            if (link === 'green' && auth === 'off' && lan1 === 'green' ) return 'btu_faulty'
            if (link === 'green' && auth === 'off' && lan1 === 'greenBlinking' ) return 'btu_faulty'
            if (link === 'green' && auth === 'green' && lan1 === 'off'  ) return 'rj45Issue' 
            else return 'btu_faulty'
        }
    break

    //sbvm
    case 'ZTE_ZXHN_H267A': 
        
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            if (dsl === 'green'  && internet === 'greenBlinking'  && twodotfourghz === 'greenBlinking') return 'noIssueSBVM'
            if (dsl === 'greenBlinking'  && internet === 'greenBlinking'  && twodotfourghz === 'greenBlinking') return 'noIssueSBVM'
            if (dsl === 'green'  && internet === 'greenBlinking'  && twodotfourghz === 'off') return 'reconfigure_wifi'
            if (dsl === 'green'  && internet === 'greenBlinking'  && fiveghz === 'off') return 'reconfigure_wifi'
            if (dsl === 'off' &&  internet === 'off' && fiveghz === 'off' ) return 'btu_faulty'
            if (dsl === 'green' && internet === 'off') return 'network'
            if (dsl === 'greenBlinking') return 'rj11Issue'
            if (dsl === 'off') return 'rj11Issue'
            else return 'btu_faulty'
        }
    break
    case 'NETIS_DL4480V': 
        
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            
            if(dsl === 'green' && internet === 'green' &&  (wlan === 'greenBlinking' || wlan === 'blueBlinking' || wlan === 'green' || wlan === 'blue' ) ) return 'noIssueSBVM'
            if(dsl === 'green' && internet === 'greenBlinking' && (wlan === 'greenBlinking' || wlan === 'blueBlinking' || wlan === 'green' || wlan === 'blue')) return 'noIssueSBVM'
            if(dsl === 'green' && internet === 'greenBlinking' && wlan === 'off' ) return 'btu_faulty'
            if(dsl === 'green' &&  internet === 'greenBlinking' && ( wlan === 'greenBlinking' || wlan === 'off' || wlan === 'blueBlinking' )) return 'reconfigure_wifi'
            if(dsl === 'off') return 'rj11Issue'
            if(dsl === 'greenBlinking') return 'rj11Issue'
            if(dsl === 'green' && internet === 'off') return 'network'
            else return 'btu_faulty'
        }
    break 

    case 'NETIS_DL4480V1': 
        
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            if(dsl === 'green' && internet === 'green' &&  (wlan === 'greenBlinking' || wlan === 'blueBlinking' || wlan === 'green' || wlan === 'blue' ) ) return 'noIssueSBVM'
            if(dsl === 'green' && internet === 'greenBlinking' && (wlan === 'greenBlinking' || wlan === 'blueBlinking' || wlan === 'green' || wlan === 'blue')) return 'noIssueSBVM'
            if(dsl === 'green' && internet === 'greenBlinking' && wlan === 'off' ) return 'btu_faulty'
            if(dsl === 'green' &&  internet === 'greenBlinking' && ( wlan === 'greenBlinking' || wlan === 'off' || wlan === 'blueBlinking' )) return 'reconfigure_wifi'
            if(dsl === 'off') return 'rj11Issue'
            if(dsl === 'greenBlinking') return 'rj11Issue'
            if(dsl === 'green' && internet === 'off') return 'network'
            else return 'btu_faulty'
        }
    break 
    
    case 'TPLINK_ARCHER_VR1200V': 
        if (power === 'off') return 'powerIssue' 
        if (power === 'green') {
            if(dsl === 'green' && (internet === 'green' || internet === 'greenBlinking' ) && wlan_twodotfourghz === 'greenBlinking' &&  wlan_fiveghz === 'greenBlinking' ) return 'noIssueSBVM'
            if(dsl === 'green' && internet === 'greenBlinking' && (wlan_twodotfourghz === 'off' || wlan_fiveghz === 'off'  ) ) return 'reconfigure_wifi';
            if(dsl === 'green' && internet === 'off') return 'network'
            if(dsl === 'greenBlinking') return 'rj11Issue'
            if (dsl === 'off') return 'rj11Issue'
            else return 'btu_faulty'
        }
    break
        

        //RG

    case 'DLINK_DIR_850L':
        if (power === 'off') return 'powerIssue' 
        if (power === 'orange' && internet === 'off') return 'rg_faulty'
        if (power === 'green' && internet === 'green') return 'noIssueRG'
        if (power === 'orange' && internet === 'green') return 'rg_faulty'
        if (power === 'green' && internet === 'off') return 'rj45Issue'
        if (power === 'green' && internet === 'orange') return 'network'
        if (power === 'orange' && internet === 'orange') return 'rg_faulty'
        else return 'rg_faulty'
        break    

    case 'INNACOM_RGX4400': 
        if (power === 'off') return 'powerIssue'
        if (power === 'red') return 'rg_faulty' 
        if (power === 'white') {
            if(wan === 'off') return 'rj45Issue'
            if(wan === 'white' && internet === 'red') return 'network'
            if(wan === 'white' && internet === 'off') return 'network'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'white' && fiveghz === 'white' ) return 'noIssueRG'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'whiteBlinking' && fiveghz === 'whiteBlinking' ) return 'noIssueRG'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'white' && fiveghz === 'off' ) return 'reconfigure_wifi'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'whiteBlinking' && fiveghz === 'off' ) return 'reconfigure_wifi'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'white' ) return 'reconfigure_wifi'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'whiteBlinking' ) return 'reconfigure_wifi'
            if(wan === 'white' && internet === 'whiteBlinking' && twodotfourghz === 'off' && fiveghz === 'off' ) return 'reconfigure_wifi'
            else return 'rg_faulty'
        }
    break
    case 'TPLINK_ARCHER_C1200': 
        if (power === 'off') return 'powerIssue'
        if (power === 'green') {
            if(internet === 'off') return 'rj45Issue'
            if(internet === 'orange') return 'network'
            if(twodotfourghz === 'greenBlinking' && fiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'noIssueRG'
            if(twodotfourghz === 'off' && fiveghz === 'off' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            if(twodotfourghz === 'off' && fiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            if(twodotfourghz === 'greenBlinking' && fiveghz === 'off' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            else return 'rg_faulty'
        }
    break
    case 'TPLINK_ARCHER_C5': 
        if (power === 'off') return 'powerIssue'
        if (power === 'green') {
            if( internet === 'off'  ) return 'rj45Issue'
            if(internet === 'orange') return 'network'
            if(twodotfourghz === 'greenBlinking' && fiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'noIssueRG'
            if(twodotfourghz === 'off' && fiveghz === 'off' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            if(twodotfourghz === 'off' && fiveghz === 'greenBlinking' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            if(twodotfourghz === 'greenBlinking' && fiveghz === 'off' && internet === 'greenBlinking'  ) return 'reconfigure_wifi'
            else return 'rg_faulty'
        }
    break
    case 'DLINK_DIR_842':
        if (power === 'off') return 'powerIssue'
        if (power === 'greenBlinking' && (internet === 'green' || internet === 'off' ) && (wlan === 'green' || wlan === 'off') ) return 'network'
        if (power === 'greenBlinkingFast') return 'rg_faulty'
        if (power === 'green' && internet === 'green' && wlan === 'green' ) return 'noIssueRG'         
        if (power === 'green' && internet === 'green' && wlan === 'off' ) return 'rg_faulty'
        if (power === 'green' && internet === 'green' && wlan === 'off' ) return 'rg_faulty'
        if (power === 'greenBlinking' && internet === 'OFF') return 'rj45Issue'
        if (power === 'green'  && internet === 'OFF') return 'reconfigure_wifi'
        if (power === 'greenBlinkingFast' && internet === 'OFF') return 'rj45Issue'
        if (wlan === 'greenBlinking' && internet === 'OFF') return 'rj45Issue'
        if (wlan === 'green'  && internet === 'OFF') return 'rj45Issue'
        if (wlan === 'greenBlinkingFast' && internet === 'OFF') return 'rj45Issue'
        else return 'rg_faulty'

    break

    case 'ADSL':
        if (power === 'off') return 'powerIssue'
        if (power === 'on') {
            if( dls === 'on' || wan === 'on' ) return 'noIssue'
            if( dls === 'off' || wan === 'off' ) return 'rj11Issue'
            if(wifi === 'orange') return 'adsl_faulty'
            else return 'adsl_faulty'
        }
    break


    default:
    return 'powerIssue'
}
}
function findModemType(obj, value){
    let type = null;
    Object.entries(obj).forEach(([key, val]) => {
        if( key ===  value){
           type = val.type;
        }
    });
   return type;
}  

function speedTestCal(context,event){
    let cal =0;
    if( context.service ==='UNIFI')
        cal = (event.type*90)/100;
    else if(context.service ==='STREAMYX') 
         cal = (event.type*70)/100;
    return cal;
}

function getQuestion(context, event, actionMeta){
   
    if( context.service ==='UNIFI' && event.type > 0) {
       
        let cal = (event.type*90)/100;
        let setQuestion = "Before we continue, let’s do a speedtest. Is your speed test result above "+cal+" Mbps?";
        speedTest.states.speedTest.meta.question = setQuestion;
        return setQuestion;
    }
    else if(context.service ==='STREAMYX' && event.type > 0) {

        let cal = (event.type*70)/100;
        let setQuestion = "Before we continue, let’s do a speedtest. Is your speed test result above "+cal+" Mbps?";
        speedTest.states.speedTest.meta.question = setQuestion;
        return setQuestion;
    }
    else   
        return Object.values(actionMeta.state.meta)[0].question;
}


