function showSalary(users, age) {
  return users.filter((user) => user.age <= age)
  .map((elem) => `${elem.name}, ${elem.balance}`).join('\n');
}
