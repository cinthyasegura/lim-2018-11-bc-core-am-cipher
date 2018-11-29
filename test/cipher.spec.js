describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcd" ), "HIJKLMNOPQRSTUVWXYZABCDEFG hijk" );
    });

/*it('debería retornar "HIJ KLM" para "ABC DEF" con offest 33', () => {
      assert.equal(cipher.encode(33, "ABC DEF abc def" ), "HIJ KLM hij klm" );
    });*/


  });








  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33', () =>{
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG hijk"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcd");
    });
  });

  /*describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});
