export function apiGetAllUsers(feathersApp){  
  const userService = feathersApp.service('users');
  // console.log('this.Model',this.Model);
  console.log('this',this);
  console.log('userService',userService);
  
  return userService
    .find({})
    .then((value) => {
    	  // console.log('data en API',value.data);
    	return value.data;
    })
    .catch((err) => {
    	 console.log('error en api',err);
    	return err.data;
    })
}
export function apiGetSingleUser(feathersApp,idUser){  
  const userService = feathersApp.service('users');
  return userService  
    .find({
      query: {
        '$limit': 1,
        '_id': idUser
      }
    })
    .then((data, err) => data.data);
}

export function apiCreateUser(feathersApp,formValues){
  // console.log('before destructuring',formValues);
  var [{ 
      firstName,
      lastName,
      email,
      picture="default.jpg",
      username,
      description,
      roleName,
      racis,
      longitude,
      latitude
  }] = formValues;  
  const userService = feathersApp.service('users');
  return userService.create({
    firstName, lastName, email,
    username,password:" ",
    description, roleName,
    racis, picture,  
    geoLocation:{latitude, longitude}})
    .then((value) => {
      console.log('User created ->data en API',value);
      return value;
    })
    .catch((err) => {
      console.log('error en create api',err);
      return err;
    })
}  

export function apiDeleteUser(feathersApp,idUser){  
  // console.log('en API',idUser);
  const userService = feathersApp.service('users');
  return userService.remove(idUser)
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err;
    })
}  
export function apiUpdateUser(feathersApp,idUser,todo, description){
  const userService = feathersApp.service('users');
  return userService.patch(idUser, {todo, description})
    .then((value) => {
      // console.log('data en UPDATE API',value);
      return value;
    })
    .catch((err) => {
      console.log('error en UPDATE api',err);
      return err;
    })
}  
