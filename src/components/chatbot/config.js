import { createChatBotMessage } from "react-chatbot-kit";
import AvatarBot from "./AvatarBot"
import Option from "./Option"
import LinkList from "./LinkList"

const config = {
        initialMessages: [createChatBotMessage(`what are you looking for?`,{
            widget:"options"
        })],

        botName:"Sabitha & Co",
        customComponents:{
            botAvatar:(props)=><AvatarBot {...props} />
        },

        widgets: [
            {
                  widgetName: "options",
                  widgetFunc: (props) => <Option {...props} />,
            },
            {
                  widgetName: "TilesLinks",
                  widgetFunc: (props) => <LinkList {...props} />,
                  props: {
                    options: [
                          {
                            text: "Tiles (CLICK ME)",
                            url:
                              "/tiles",
                            id: 1,
                          },
                    ],
                  },
            },
            {
              widgetName: "GlassLinks",
              widgetFunc: (props) => <LinkList {...props} />,
              props: {
                options: [
                      {
                        text: "Glass (CLICK ME)",
                        url:
                          "/glass",
                        id: 1,
                      },
                ],
              },
            },
            {
              widgetName: "counterpadsLinks",
              widgetFunc: (props) => <LinkList {...props} />,
              props: {
                options: [
                      {
                        text: "counter pads (CLICK ME)",
                        url:
                          "/counterpads",
                        id: 1,
                      },
                ],
              },
            },
            {
              widgetName: "cpfittingsLinks",
              widgetFunc: (props) => <LinkList {...props} />,
              props: {
                options: [
                      {
                        text: "cp-fittings (CLICK ME)",
                        url:
                          "/cpfittings",
                        id: 1,
                      },
                ],
              },
            },
            {
              widgetName: "sanitarywareLinks",
              widgetFunc: (props) => <LinkList {...props} />,
              props: {
                options: [
                      {
                        text: "sanitary ware(CLICK ME)",
                        url:
                          "/sanitaryware",
                        id: 1,
                      },
                ],
              },
            },
        ]
}

export default config