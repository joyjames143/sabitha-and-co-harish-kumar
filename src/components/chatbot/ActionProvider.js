class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage("hi..how can i help?")
        this.addMessageToState(message)
    }

    handleTiles = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I will take you to Tiles page",
        {
          widget: "TilesLinks",
        }
      );
  
      this.addMessageToState(message)
    };
    handleGlass = () => {
      const message = this.createChatBotMessage(
        "Superb, I will take you to Glass page",
        {
          widget: "GlassLinks",
        }
      );
  
      this.addMessageToState(message)
    };
    handleCounterpads = () => {
      const message = this.createChatBotMessage(
        "splendid, I will take you to counterpads page",
        {
          widget: "counterpadsLinks",
        }
      );
  
      this.addMessageToState(message)
    };
    handleCpfitting = () => {
      const message = this.createChatBotMessage(
        "excellent, I will take you to cp-fittings page",
        {
          widget: "cpfittingsLinks",
        }
      );
  
      this.addMessageToState(message)
    };
    handleSanitaryware = () => {
      const message = this.createChatBotMessage(
        "great, I will take you to sanitary ware page",
        {
          widget: "sanitarywareLinks",
        }
      );
  
      this.addMessageToState(message)
    };

    addMessageToState = (message) => {
        this.setState(prevState => ({...prevState, messages:[...prevState.messages,message]})) 

    }

  }
  
  export default ActionProvider;