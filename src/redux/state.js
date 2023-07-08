let renderEntireTree = () => {
   console.log('State change');
}


const state =
   {
      profilePage: {
         posts: [
            {id: 1, message: 'Hello', likeCounts: '1'},
            {id: 2, message: 'Hello World', likeCounts: '22'}
         ],
         newPostText: 'programmer',
      },

      dialogsPage: {
         messages: [
            {message: 'Hello Wold!',},
            {message: 'How old are you?',},
            {message: 'What is your name?',},
            {message: 'YO!'}
         ],
         dialogs: [
            {id: '1', name: 'Kama'},
            {id: '2', name: 'Julia'},
            {id: '3', name: 'Artem'},
            {id: '4', name: 'Vitalya'}
         ],
      },
      sidebar: {
         friends: [
            {name: 'Julia'},
            {name: 'Artem'},
            {name: 'Vitalya'}
         ]
      },


   }

export const addPosts = () => {
   const post = {
      id: 3,
      message: state.profilePage.newPostText,
      likeCounts: '0'
   }

   state.profilePage.posts.push(post)
   state.profilePage.newPostText = ''
   renderEntireTree(state);
}
export const updatePostChange = (newText) => {
   state.profilePage.newPostText = newText;
   renderEntireTree(state);
}

export const subscribe = (observer) => {
   renderEntireTree = observer;
}

export default state;