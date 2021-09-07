import { encodeForm } from './form';

describe('Form utils functions', () => {
  describe('encodeForm', () => {
    it('encode correctly the data passed', () => {
      const data = {
        name: 'this name',
        email: 'thisis@email.com',
        message: 'Mensagem',
      };

      expect(encodeForm(data)).toEqual(
        'name=this%20name&email=thisis%40email.com&message=Mensagem'
      );
    });
  });
});
