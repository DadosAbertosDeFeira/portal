export default [
  {
    name: 'Ana Paula',
    role: 'Desenvolvedora',
    picture: 'https://avatars.githubusercontent.com/anapaulagomes',
    github: 'anapaulagomes',
    linkedin: 'anapaulagomess',
    twitter: 'anapaulagomess',
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
    linkedin: 'matheus-cruz-rocha-38021525',
    twitter: 'matheusrocha',
  },
  {
    name: 'Emerson Oliveira',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/emersonsdo',
    github: 'emersonsdo',
    linkedin: 'emerson-oliveira-89ab859',
  },
  {
    name: 'Maria Clara',
    role: 'Desenvolvedora',
    picture: 'https://avatars.githubusercontent.com/olarclara',
    github: 'olarclara',
    linkedin: 'mariaclarasantana',
  },
  {
    name: 'Rafael Gomes',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/gomex',
    github: 'gomex',
    linkedin: 'rbgomes',
    twitter: 'gomex',
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
  twitter: 'filipebsmaia',
}
*/
