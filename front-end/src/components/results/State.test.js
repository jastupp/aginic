import State from './State';

describe('Test the State enum', () => {

    it('Should have the waiting results set', () => {
        expect(State.WAITING).toBe("WAITING");
    });

    it('Should have the pending results set', () => {
        expect(State.PENDING).toBe("PENDING");
    });

    it('Should have the success results set', () => {
        expect(State.SUCCESS).toBe("SUCCESS");
    });

    it('Should have the failed results set', () => {
        expect(State.FAILURE).toBe("FAILURE");
    });
})