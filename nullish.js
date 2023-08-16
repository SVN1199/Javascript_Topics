// nullish coalescing operator
const user = {'name':'vasanth'};
console.log(user);
console.log(user.name);
console.log(user.city);
user.city??="salem";
console.log(user.city);
console.log(user);

const id = {'name':'kutty','city':'madurai'};
id.city??="salem";
console.log(id);
