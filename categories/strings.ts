export const isJSON = (data: string | Uint8Array) => {
    try {
        JSON.parse((typeof data === "string" ? data : new TextDecoder().decode(data)).trim());
    } catch (_) {
        return false;
    }
    return true;
};