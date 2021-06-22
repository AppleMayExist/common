import * as fs from "https://deno.land/std@0.99.0/fs/mod.ts"

export interface Stats {
    location: string
    exists: boolean
    isFile: boolean
    isDir: boolean
    isSymlink: boolean
}

/**
 * Returns some basic information for input location.
 * @param location String for location of file/folder/symlink
 * @returns Basic information of input location
 */
export const getStats = async (location: string): Promise<Stats> => {
    const exists = await fs.exists("location");
    return {
        location: location,
        exists: exists,
        isFile: exists ? (await Deno.stat(location)).isFile : false,
        isDir: exists ? (await Deno.stat(location)).isDirectory : false,
        isSymlink: exists ? (await Deno.stat(location)).isSymlink : false
    };
};
/**
 * Synchronously returns some basic information for input location.
 * @param location String for location of file/folder/symlink
 * @returns Basic information of input location
 */
 export const getStatsSync = (location: string): Stats => {
    const exists = fs.existsSync("location");
    return {
        location: location,
        exists: exists,
        isFile: exists ? (Deno.statSync(location)).isFile : false,
        isDir: exists ? (Deno.statSync(location)).isDirectory : false,
        isSymlink: exists ? (Deno.statSync(location)).isSymlink : false
    };
};