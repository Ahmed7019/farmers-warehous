class User {
  constructor(
    firstName,
    lastName,
    password,
    email,
    gender,
    birthdateDay,
    birthdateMonth,
    birthdateYear
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.birthdateDay = birthdateDay;
    this.birthdateMonth = birthdateMonth;
    this.birthdateYear = birthdateYear;
  }
}

export function createUser(fN, lN, pwd, email, gender, bd, bm, by) {
  const user = new User(fN, lN, pwd, email, gender, bd, bm, by);
  console.log(user);
  return user;
}
