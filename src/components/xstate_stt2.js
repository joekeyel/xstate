
const internet_speed = Machine ({

    id:'internet_speed',
    context :{
        question:'',
        diagram_name:''

    },
    initial:'my_internet_speed',
    states:{

        my_internet_speed :{
            on:{}
        },

        wireless_indicator :{
            on:{}
        },

        check_wifi_strength :{
            on:{}
        },

        no_issue :{
            on:{}
        },
        configure_wifi_connection :{
            on:{}
        },

        provide_guideline_for_optimize_signal :{
            on:{}
        },
        verify_wired_connection :{
            on:{}
        }


    }



})

const fetchMachine = Machine({
    id: 'troubleshootingflow',
    context: { question: '',
               diagram_name:''         
                },
    initial: 'introduction',
    states: {
    
      introduction: {
        on: { 
         UNIFI: {
            
                target:'unifi' , actions:[
                assign({question: ctx => "Check your unifi physical connection"
                          }),
                assign({diagram_name: ctx => ["ONU+RG.PNG","SBVM.PNG"]}) 
              ]
                
         },
         STREAMYX: {
            target:'streamyx' , actions:[
                assign({question: ctx => "Check your streamyx physical connection" }),
                assign({diagram_name: ctx => ["SBVM.PNG"]}) 

             ]
            }
        }
      },



     unifi:{
        
        on:{ PROCEED:'service_normal' }
        
      },
      streamyx:{
        
       on:{ PROCEED:'service_normal' }
      },

      service_normal:{
          on:{
            
            ABLE_BROWSE_INTERNET:'go_thanks_sharing',
            PROBLEM_ACCESS_INTERNET:'identify_cpe_type'
            
          }
      },
      
      go_thanks_sharing:{
        
        type: 'final'
      },
      
       identify_cpe_type:{
        
        on:{
          
          PROCEED:{
          target:'led_diagram' , actions:
              assign({question: ctx => "" })
          }
          
        }
        
      },
      
      led_diagram :{
        
        on:{
          PROCEED:'proposed_solution'
        }
      },
      
      proposed_solution:{
        
        on:{}
        
      }
     
     
    }
   
  });
