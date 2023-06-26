const state =
   {
      profilePage: {
         posts: [
            {id: 1, message: 'Hello', likeCounts: '1'},
            {id: 1, message: 'Hello World', likeCounts: '22'}
         ],
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


   }

export default state;