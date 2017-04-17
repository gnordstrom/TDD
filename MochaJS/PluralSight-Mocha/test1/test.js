describe('my first suite', function() {
    
    beforeEach(function() {
        console.log('setup');
    });

    afterEach(function() {
        console.log('teardown');
    });

    before(function() {
        console.log('before');
    });
    after(function() {
        console.log('after');
    });

    it('should be test 1', function() {
        expect(1).to.equal(1);
        console.log('test 1')
    });

    describe('inner suite', function() {

        test('should be test 2', function() {
            expect(2).to.equal(2);
            console.log('test 2')
        });
    });
})