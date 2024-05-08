import {test} from "@playwright/test"
import data from "../../data.json"
import fs from "fs/promises"

test.only("test1",async()=>{
    let value = data.value
    console.log('Value from second file: ',value)
    const newValue = value+1
    const jsonData = JSON.stringify({ value: newValue });
    await fs.writeFile('data.json', jsonData, 'utf-8');
})