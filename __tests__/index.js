import m from '../';

describe('fe-heroes', () => {
    it('should retrieve a list of heroes', () => {
        const results = m.getAll();
        expect(results.length).toBeGreaterThan(0);
    });
});
