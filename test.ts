// This file contains no actual methods for consistently testing the functionality of this module,
// however is just a way for me to informally test things that I've recently added (in the same workspace).
// There is nothing important in here, so if you want to use it, that's fine.

import {inputRaw} from "./mod.ts"

for await (const i of inputRaw()) {
    console.log(i)
}