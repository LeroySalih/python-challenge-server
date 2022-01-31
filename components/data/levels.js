import OutputMarkUp from '../level-1/output';
import OperatorsNumericMarkUp from '../level-1/operators-numeric';
import InputsMarkUp from '../level-1/inputs';
import VariablesMarkUp from '../level-1/variables';
import DecisionMarkUp from '../level-1/decisions';
import RangeMarkUp from '../level-1/range';
import LoopsForMarkUp from '../level-1/loops-for';
import LoopsWhileMarkUp from '../level-1/loops-while';
import DefMarkUp from '../level-1/defs';

import OperatorsStringMarkUp from '../level-1/operators-string';
import OperatorsBooleanMarkUp from '../level-1/operators-boolean';

import InputValidationMarkUp from '../level-2/input-validation';
import OddsOrEvensMarkUp from '../level-2/odds-or-evens';
import AverageRangeMarkUp from '../level-2/average-range';

import LetterCountMarkUp from '../level-3/letter-count';
import BottlesOfPepsiMarkUp from '../level-3/bottles-of-pepsi';
import TransposeMarkUp from '../level-3/transpose';
import TrianglesMarkUp from '../level-3/triangles';
import TempConverterMarkUp from '../level-3/temp-converter';
import GradeCheckerMarkUp from '../level-3/grade-checker';
import EmergencyResponseMarkUp from '../level-3/emergency-response';
import ElevatorControlMarkUp from '../level-3/elevator-instructions';

import SqlCreateTableMarkUp from '../database/create-tables';
import SqlInsertRecordMarkUp from '../database/insert-tables';
import SqlSelectRecordMarkUp from '../database/select-single-table';
import SqlDeleteRecordMarkUp from '../database/delete-rows';
import SqlUpdateRecordMarkUp from '../database/update-records';


const getLevels = (email) => ({
    Learn : [
        {title: "Output", markup: <OutputMarkUp email={email} tasks={['level-1::output']}/>, tasks:['level-1::output']},
        {title: "Operators - Numeric", markup: <OperatorsNumericMarkUp email={email} />, tasks:[`level-1::operations-numeric`]},        
        {title: "Variables", markup: <VariablesMarkUp email={email} />, tasks:[`level-1::variables-1`, `level-1::variables-2`, `level-1::variables-3`]},
        {title: "Inputs", markup: <InputsMarkUp email={email} />, tasks: [`level-1::input-1`, `level-1::input-2`, `level-1::input-3`]},
        {title: "Operators - Strings", markup: <OperatorsStringMarkUp email={email} />, tasks: [`level-1::operators-string`]},
        {title: "Operators - Booleans", markup: <OperatorsBooleanMarkUp email={email} />, tasks:[`level-1::operators-booleans`]},
        {title: "Decisions", markup: <DecisionMarkUp email={email} />, tasks: [`level-1::decisions-1`, `level-1::decisions-2`, `level-1::decisions-3`] },
        {title: "Range", markup: <RangeMarkUp email={email} />, tasks:[`level-1::range-1`, `level-1::range-2`, `level-1::range-3`]},
        {title: "Loops - For", markup: <LoopsForMarkUp email={email} />, tasks:[`level-1::for-1`, `level-1::for-2`, `level-1::for-3`]},
        {title: "Loops - While", markup: <LoopsWhileMarkUp email={email} />, tasks:[`level-1::while-1`, `level-1::while-2`, `level-1::while-3`]},
        {title: "Defs", markup: <DefMarkUp email={email} />, tasks:[`level-1::def-1`, `level-1::def-2`, `level-1::def-3`, `level-1::def-4`]}
    ],
       
        /*
        Variables
        Input
        Data Types
        Operators - String
        Operators - Logical
        Decisions - IF
        Decisions - IF ELSE
        Decisions - IF ELIF ELSE
        Loops - For
        Loops - While
        Defs - No params
        Defs - Params
        Defs - Return
        */

    Algorithms : [
        {title: "Input Validation", markup: <InputValidationMarkUp email={email} />},
        {title: "Odds or Evens", markup: <OddsOrEvensMarkUp email={email}/>},
        {title: "Average", markup: <AverageRangeMarkUp email={email} />},
    ],
    Challenges: [
        // {title: "Temperature Converter - detect that the user has entered F or C and convert "}
        {title: "Grade Checker",      markup: <GradeCheckerMarkUp email={email} />},
        {title: "Elevator Control", markup: <ElevatorControlMarkUp email={email}/>},
        {title: "Emergency Response", markup: <EmergencyResponseMarkUp email={email} />},
        {title: "Temp Converter", markup: <TempConverterMarkUp email={email} />},
        {title: "Bottle of Pepsi", markup: <BottlesOfPepsiMarkUp email={email} />},
        {title: "Letter Count ", markup: <LetterCountMarkUp email={email} />},
        {title: "Transpose", markup: <TransposeMarkUp email={email} />},
        {title: "Triangle", markup: <TrianglesMarkUp email={email}/>},
        {title: "Elevator Control", markup: <ElevatorControlMarkUp email={email}/>},
        // {title: "Coffee", markup: <ElevatorControlMarkUp email={email}/>},
        // Pasword Generator
        // Find First in List
        // Find Highest in List
        // Is each item in a correct position (items to the left are lower, items to the right are higher)
    ],
    Database:[
        {title: "Create Table", markup: <SqlCreateTableMarkUp email={email}/>},
        {title: "Insert Record", markup: <SqlInsertRecordMarkUp email={email}/>},
        {title: "Select Single Table", markup: <SqlSelectRecordMarkUp email={email}/>},
        {title: "Delete Rows", markup: <SqlDeleteRecordMarkUp email={email}/>},
        {title: "Update Rows", markup: <SqlUpdateRecordMarkUp email={email}/>},


    ]

})

const getTasks = (email) => (
    getLevels(email)['Learn'].map(t => t.tasks).flat()
    )

export default getLevels
export {getTasks}