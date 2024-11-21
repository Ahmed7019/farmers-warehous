class User {
  constructor(firstName, lastName, password, email, gender, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.birthdate = birthdate;
  }
}

export function createUser(fN, lN, pwd, email, gender, bd) {
  const user = new User(fN, lN, pwd, email, gender, bd);
  console.log(user);
  return user;
}
