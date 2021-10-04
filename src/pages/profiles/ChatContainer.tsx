import React, {useState, useEffect, useContext} from 'react'
import { AppContext } from 'context'
import styled from 'styled-components'
import behringer from "images/behringer.png"
import bible from "images/bible.png"
import gregory from "images/gregory.png"
import {StreamChat} from 'stream-chat'
import { Chat, Channel, ChannelList, ChannelHeader, MessageInput, MessageList, Thread, Window, LoadingIndicator } from 'stream-chat-react'
import 'stream-chat-react/dist/css/index.css';
import {Doctor} from 'pages/profiles'

const fakeData = [
  {
    id: "behringer_5cc2e452-955a-462d-bcba-f9ceb12d2cad",
    slug: "behringer",
    name: "Dr. Behringer",
    title: "Radiologic technician",
    image: behringer
  },
  {
    id: "bible_cc68808c-ee80-4533-a37a-24bad3f7e54e",
    slug: "bible",
    name: "Dr. Bible",
    title: "Respiratory therapist",
    image: bible
  },
  {
    id: "gregory_84b32fce-9fbe-41f0-a979-9f83388e184e",
    slug: "gregory",
    name: "Dr. Gregory",
    title: "Dietician",
    image: gregory
  },
]

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3VtbWVyLXRvb3RoLTgifQ.hAx6wM3efDj2ZuQ7b2SUE8sOYxTMOytBn7O41f1WhKI'
const filters = {type: 'messaging', members: {$in: ['summer-tooth-8']}}

export function ChatContainer() {
  const [chatClient, setChatClient] = useState<StreamChat>()
  const {state} = useContext(AppContext)

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('xjrbqduwrb7z')

      await client.connectUser(
        {
          id: 'summer-tooth-8',
          name: 'summer-tooth-8',
          image: 'https://getstream.io/random_png/?id=summer-tooth-8&name=summer-tooth-8',
        },
        userToken,
      );

      fakeData.forEach(({id, slug, name, title, image}) => {
        const newChannel = client.channel('messaging', slug, {
          image: image,
          name: name,
          members: ['summer-tooth-8', id],
          title: title
        })
        newChannel.create()
      })

      setChatClient(client);
    }
    console.log("theme", state.currentTheme.name)
    initChat()
  },[])

  if(!chatClient) {
    return <LoadingIndicator />
  }

  return (
    <ChatWrapper>
      <Chat client={chatClient} theme={"messaging " + state.currentTheme.name}>
        <ChannelList filters={filters} Preview={Doctor} />
        <Channel>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </ChatWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ChatWrapper = styled.div`
  margin-top: 16px;
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 20px;
  padding-right: 10px;
  background: ${({theme}) => theme.name === "light" ? 'var(--grey-gainsboro)' : 'var(--dark-grey)'};
  
  .str-chat__channel-list-messenger {
    background: ${({theme}) => theme.name === "light" ? 'var(--grey-gainsboro)' : 'var(--dark-grey)'};
  }

  .str-chat__input-flat {
    border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  }

  .str-chat__avatar-image {
    border-radius: 50%;
  }
`