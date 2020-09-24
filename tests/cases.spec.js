import assert from "assert";
import request from "supertest";

// https://stackoverflow.com/a/24497202
describe( "Cases API", () => {
    it( "should have a response in collection", async () => {
        const res = await request( `127.0.0.1:5000` ).get( `/api/cases` );
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(res.body.id, "");
    });
    it( "should have a response in member", async () => {
        const res = await request( `127.0.0.1:5000` ).get( `/api/cases/42` );
        assert.strictEqual(res.statusCode, 200);
        assert.deepStrictEqual(res.body.id, "42");
    });
});
