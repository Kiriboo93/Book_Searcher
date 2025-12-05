/**
 * Shortens a string to desired amount of characters and adds three dots to its end.
 * @param text string to be shortened.
 * @param charAmount amount of desired characters.
 * @returns shortened string.
 */
export function shortenString(text: string, charAmount: number): string {
    return text.length > charAmount ? text.substring(0, charAmount) + "..." : text;
}

/**
 * Removes repeated strings in an array of strings.
 * @param text array of strings where we want to remove repeated strings.
 * @returns array of strings without repeated values.
 */
export function removeRepeatedStrings(text: string[]): string[] {
    let included: string[] = [];
    for (const i in text) {
        let found: boolean = false;
        for (const j in included) {
            if (included[j].localeCompare(text[i]) === 0) {
                found = true;
            }
        }

        if (!found) {
            included.push(text[i].trim());
        }
    }

    return included;
}