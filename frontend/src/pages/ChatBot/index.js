import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Box } from "@material-ui/core";
import SearchBar from "../../components/SearchBar";
import BotChat from './components/BotChat'
import { makeStyles } from "@material-ui/core/styles";

// import { useFetchAllUsers } from "../../hooks/users/useUsers";
// import { useCurrentUser } from "../../hooks/auth/useCurrentUser";

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    position: "absolute",
    top: "83px",
    zIndex: 10000000,
    right: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
  },
}));

const BotRedirect = ({ url, message }) => {
  return (
    <div>
      <a href={url} target="_blank">
        {message}
      </a>
    </div>
  );
};

const ChatPage = () => {
  const classes = useStyles();
  const steps = [
    {
      id: '1',
      message: 'Hello, I am a chat bot. Please ask me.',
      trigger: 'search',
    },
    {
      id: 'search',
      user: true,
      validator: (value) => {
        if (!value) {
          return 'Please enter value';
        }
        return true;
      },
      trigger: '3',
    },
    {
      id: '3',
      component: <BotChat />,
      waitAction: true,
      trigger: 'search',
    },
  ];
  return (
    <Box style={{width: '100%', display: 'flex', justifyContent: 'center', flexGrow: 1, paddingTop: 30, paddingBottom: 30}}>
      <ChatBot 
        steps={steps} 
        hideHeader={true}
        classeName={'myclassname'}
        avatarStyle={{background: 'none', boxShadow: 'none'}}
        bubbleStyle={{background: '#e7e6e6', borderRadius: '10px', color: 'black', border: '1px solid', borderColor: '#b9b6b6', overflowWrap: 'anywhere'}}
        inputStyle={{border: '1px solid', borderColor: '#31538f', borderRadius: '0px'}}
        submitButtonStyle={{backgroundColor: '#4472c4', borderRadius: '0px', height: '100%'}}
        style={{border: 'none', borderRadius: '0px', boxShadow: 'none', width: '650px', display: 'flex', flexDirection: 'column', height: '100%'}}
        customStyle={{background: 'none', boxShadow: 'none', display: 'flex', justifyContent: 'flex-start', margin: 0, padding: 0}}
        botAvatar='/bot_avatar.svg'
        userAvatar='/man.png'
        contentStyle={{flexGrow: 1}}
      />
    </Box>
  );
};

export default ChatPage;
