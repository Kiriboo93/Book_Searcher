import { shortenString, removeRepeatedStrings } from "../../src/utils/tools";

describe("Tools tests", () => {
    test("Shorten string test", async () => {
        const example = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            "Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa." +
            "Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue.";

        expect(shortenString(example, 50)).toStrictEqual("Lorem ipsum dolor sit amet, consectetur adipiscing...");
    });

    test("Remove repeated strings test", async () => {
        const example = ["test", "test", "test1", "test2", "test3", "test2"];
        const result = ["test", "test1", "test2", "test3"];

        expect(removeRepeatedStrings(example)).toStrictEqual(result);
    });
});