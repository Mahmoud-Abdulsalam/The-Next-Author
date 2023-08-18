const names = ["Andreas", "Arefin", "Christian", "Mert", "Staicy"];

const excludedName = "";

let randomName;
{
  const randomIndex = Math.floor(Math.random() * names.length);
  randomName = names[randomIndex];
}
while (randomName === excludedName);

const nextAuthor = "The Next Author will be: " + randomName;

console.log(nextAuthor);
