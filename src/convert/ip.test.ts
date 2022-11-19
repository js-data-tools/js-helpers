import { areIpsEqual, ipv4AsNumber, ipv4AsString } from "./ip";

describe("test ipAsString()", () => {
    it("ipv4AsString(number) formats the IP", () => {
        const actual = ipv4AsString(3566161419);
        expect(actual).toEqual("212.143.78.11");
    });

    it('ipv4AsString(string) returns the IP "as-is"', () => {
        const actual = ipv4AsString("not-really::ip");
        expect(actual).toEqual("not-really::ip");
    });
});

describe("test ipv4AsNumber()", () => {
    it("ipv4AsNumber(number) returns parameter without changes", () => {
        const actual = ipv4AsNumber(3566161419);
        expect(actual).toEqual(3566161419);
    });

    it("ipv4AsNumber(string) returns correct IP", () => {
        const actual = ipv4AsNumber("172.22.0.0");
        expect(actual).toEqual(-1407844352);
    });
});

describe("test areIpsEqual()", () => {
    it("areIpsEqual('10.0.0.1', '10.0.0.1') returns true", () => {
        const actual = areIpsEqual('10.0.0.1', '10.0.0.1');
        expect(actual).toBeTruthy();
    });

    it("areIpsEqual('10.0.0.1', '10.0.0.2') returns false", () => {
        const actual = areIpsEqual('10.0.0.1', '10.0.0.2');
        expect(actual).toBeFalsy();
    });

    it("areIpsEqual('10.0.0.1', undefined) returns false", () => {
        const actual = areIpsEqual('10.0.0.1', undefined);
        expect(actual).toBeFalsy();
    });

    it("areIpsEqual(null, '10.0.0.1') returns false", () => {
        const actual = areIpsEqual(null, '10.0.0.1');
        expect(actual).toBeFalsy();
    });

    it("areIpsEqual('212.143.78.11, 3566161419) returns true", () => {
        const actual = areIpsEqual('212.143.78.11', 3566161419);
        expect(actual).toBeTruthy();
    });

    it("areIpsEqual(-1407844352, '172.22.0.0) returns true", () => {
        const actual = areIpsEqual(-1407844352, "172.22.0.0");
        expect(actual).toBeTruthy();
    });
});
