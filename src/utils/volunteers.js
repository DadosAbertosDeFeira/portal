export default [
  {
    name: 'Ana Paula Gomes',
    role: 'Faz-tudo',
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
    name: 'Vivian Macedo',
    role: 'Analista de Dados',
    picture:
      'https://media-exp1.licdn.com/dms/image/C4D03AQE9q7zoT86HQw/profile-displayphoto-shrink_400_400/0/1524262173908?e=1636588800&v=beta&t=MWsa3TgcxKNBe09bMa3Mh_a90YRMG--QxY_0zKb7Xw8',
    github: 'vihvs',
    linkedin: 'vivianmacedo',
  },
  {
    name: 'Rafael Gomes',
    role: 'Desenvolvedor',
    picture: 'https://avatars.githubusercontent.com/gomex',
    github: 'gomex',
    linkedin: 'rbgomes',
    twitter: 'gomex',
  },
  {
    name: 'Rafael Velame',
    role: 'Jornalista',
    picture:
      'https://media-exp1.licdn.com/dms/image/C4D03AQG8ytEVvsZ44g/profile-displayphoto-shrink_400_400/0/1519088249816?e=1636588800&v=beta&t=lneQV2nQp5ZcTNQbEfy7yYN1FuEKcZUb_Q4iwE8IvSw',
    // twitter: 'rafaelvelame',
    linkedin: 'rafael-velame-242b98104',
  },
  {
    name: 'Bruno Morassuti',
    role: 'Conselheiro Jurídico',
    picture: 'https://avatars.githubusercontent.com/jedibruno',
    github: 'jedibruno',
    // twitter: '',
    linkedin: 'bruno-schimitt-morassutti-7a0b5b180',
  },
  {
    name: 'Nataly Costa',
    role: 'Design',
    picture: 'https://avatars.githubusercontent.com/natalycosta',
    github: 'natalycosta',
    // twitter: '',
    linkedin: 'natalycosta',
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
