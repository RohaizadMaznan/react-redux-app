export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
      const firestore = getFirebase().firestore();
      firestore.collection('projects').add({
        ...project,
        authorFirstName: 'Rohaizad',
        authorLastName: 'Maznan',
        authorId: 12345,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT', project: project })
      }).catch((error) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', error: error })
      })
    }
  };