import * as fs from 'fs';

import {connectToDatabase} from '../../../utils/mongodb';

// read the params
// generate the correct files
// return the files as json body

// or

// save progress and scripts

const logStart = async () => {
    const {db} = await connectToDatabase();

    const data = {owner, repl_slug, challenge_name, results, successes, fails, progress, main}
    const result = await db.collections('submissions').insertOne({...data, created: new Date()});

}

export default function handler(req, res) {
    const {params} = req.query;
    const [email, challenge] = params;

    
    const filePath = challenge.replace("::", "/");
    

    // log start request to progress
    // edit the test file to ensure that the correct 
    // parameters are passed

    
    // general files
    const tests_main_py = fs.readFileSync("./files/tests/__main__.py", {encoding:'utf8'})
                                .replace("::CHALLENGE_NAME::", challenge)
                                .replace("::EMAIL::", email)
    const tests_colour_py = fs.readFileSync("./files/tests/colour.py", {encoding:'utf8'})
    const tests_testengine_py = fs.readFileSync("./files/tests/testengine.py", {encoding:'utf8'})
    
    
    // specific files
    const tests_py = fs.readFileSync(`./files/${filePath}/tests.py`, {encoding:'utf8'})
    const main_py = fs.readFileSync(`./files/${filePath}/main.py`, {encoding:'utf8'})
    const challenge_md = fs.readFileSync(`./files/${filePath}/challenge.md`, {encoding:'utf8'})

    res.status(200).json({msg:"OK", params, tests_py, challenge_md, main_py, tests_main_py, tests_colour_py, tests_testengine_py});
}