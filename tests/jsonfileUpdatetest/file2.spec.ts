import {test} from "@playwright/test"
import fs from "fs/promises"

test.only("test2",async()=>{
    const jsonData = await fs.readFile('data.json', 'utf-8');
    const updatedData = JSON.parse(jsonData);
    const value = updatedData.value;
    console.log(`Value from second file:`, value);
})