// test/index.test.js
import suma from '../src/suma.js';
import { assert } from 'chai';

describe('Suma', function() {
    it('debería sumar dos números correctamente', function() {
        assert.equal(suma(1, 2), 3);
    });
});
