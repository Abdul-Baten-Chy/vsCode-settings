const pureAssoc = (key, value, object) => ({
  ...object,
  [key]: value,
});

const person = {
  name: "Bobo",
};

const result = pureAssoc("shoeSize", 400, person);

console.log({
  person,
  result,
});
