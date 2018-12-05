export default class Utilities {
    /* https://stackoverflow.com/a/13653180/1440557 */
    static isUUID(uuid: string) {
        return uuid.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    }
}
