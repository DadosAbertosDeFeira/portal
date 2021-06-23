export default [
  {
    name: 'Ana Paula',
    role: 'Desenvolvedora',
    picture: 'https://avatars.githubusercontent.com/anapaulagomes',
    github: 'anapaulagomes',
    linkedin: 'anapaulagomess',
  },
  {
    name: 'Filipe Maia',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/filipebsmaia',
    github: 'filipebsmaia',
    linkedin: 'filipebsmaia',
  },
  {
    name: 'Matheus Rocha',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/matheusrocha89',
    github: 'matheusrocha89',
  },
  {
    name: 'Emerson Oliveira',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/emersonsdo',
    github: 'emersonsdo',
  },
  {
    name: 'Maria Clara',
    role: 'Desenvolvedora',
    picture: 'https://avatars.githubusercontent.com/olarclara',
    github: 'olarclara',
    linkedin: 'mariaclarasantana',
  },
].sort((person1, person2) => {
  return person1.name.localeCompare(person2.name); // Automatically alphabetize
});

/* Example of Person to add in list
{
  name: 'Filipe Maia',
  role: 'Desenvolvedor',
  picture: 'https://avatars.githubusercontent.com/filipebsmaia',
  github: 'filipebsmaia',
  linkedin: 'filipebsmaia',
  instagram: 'filipebsmaia',
}
*/
