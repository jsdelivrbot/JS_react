export default function({
  dispatch
}) {
  /*
    return function(next) {
    return function(action) {
    console.log(action);
    next(action);
  }
  }
  */
  return next => action => {
    //    console.log(action);

    /*
    ako nema payload ili action nema than
    If action does not have payload
    or, the payload does not have a .than property
    we don't care about it, send in on


    */
    if (!action.payload || !action.payload.then) {
      return next(action); //salje do sledeceg middleware
    }

    //next(action);
    //console.log('We have a promise', action);


    //Make sure the action's promise resolves
    action.payload //promise
      .then(function(response) { //uzmi sve sta ima doticna akcija , produzi do response ( dodaj na novu akciju response)
        /*
            create a new action with the old type, but
            replace the promeni with the response data
        */
        const newAction = { ...action,
          payload: response
        };
        dispatch(newAction); //uzmi tu akciju i prenesi do sledeceg reduktora, payload vise nece biti promise
      });
  }
}
