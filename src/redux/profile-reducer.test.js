import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ]
};

it('newpost should be added', () => {
    // 1. test data 
    let action = addPostActionCreator ('it-kamasutra.ua');
    
    // 2. Do action
    let newState = profileReducer(state,action);

    // 3. Expectation (очікування
    expect (newState.posts.length).toBe(5);
   
  });

  it('message should be correct', () => {
    // 1. test data 
    let action = addPostActionCreator ('it-kamasutra.ua');
 
    // 2. Do action
    let newState = profileReducer(state,action);

    // 3. Expectation (очікування
    
    expect (newState.posts[4].message).toBe('it-kamasutra.ua');
  });

  it('after deleting length of message should be decrement', () => {
    // 1. test data 
    let action = deletePost  (1);
 
    // 2. Do action
    let newState = profileReducer(state,action);

    // 3. Expectation (очікування
    
    expect (newState.posts.length).toBe(3);
  });

  it('after deleting length of message should not be decrement', () => {
    // 1. test data 
    let action = deletePost  (10000);
 
    // 2. Do action
    let newState = profileReducer(state,action);

    // 3. Expectation (очікування
    
    expect (newState.posts.length).toBe(4);
  });