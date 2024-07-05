const impureAssoc = (key, value, object) => {
  object[key] = value;
};

const person = {
  name: "Bobo",
};

const result = impureAssoc("shoeSize", 400, person);

console.log({
  person,
  result,
});
