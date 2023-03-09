import {getFirebaseApp} from "../FirebaseHelper";import {child, getDatabase, ref, push} from "firebase/database";export const createChat = async (loggedInUserId, chatData) => {    //tao ra tin nhan tro chuyen moi    const newChatData = {        ...chatData,        createdBy: loggedInUserId,        updateBy: loggedInUserId,        createAt: new Date().toISOString(),        updateAt: new Date().toISOString(),    };    //luu tin nhan moi vao database    const app = getFirebaseApp();    const dbRef = ref(getDatabase(app));    const newChat = await push(child(dbRef, 'chats'), newChatData);    // add mot muc cho moi nguoi dung trong userChat    const chatUsers = newChatData.users;    for (let i = 0; i < chatUsers.length; i++) {        const userId = chatUsers[i];        await push(child(dbRef, `userChats/${userId}`), newChat.key);    }    return newChat.key;}