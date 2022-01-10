import { Game } from '../app/game';

describe("The test environment", function () {
    it("should pass", function () {
        expect(true).toBe(true);
    });

    it("should access game", function () {
        expect(Game).toBeDefined();
    });
});
