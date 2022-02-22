import OutputMarkUp from '../level-1/output';
import OperatorsNumericMarkUp from '../level-1/operators-numeric';
import InputsMarkUp from '../level-1/inputs';
import VariablesMarkUp from '../level-1/variables';
import DecisionMarkUp from '../level-1/decisions';
import RangeMarkUp from '../level-1/range';
import LoopsForMarkUp from '../level-1/loops-for';
import LoopsWhileMarkUp from '../level-1/loops-while';
import DefMarkUp from '../level-1/defs';
import ListsMarkUp from '../level-1/lists';

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

const levels = {
    Learn : [
        {title: "Output", markup: <OutputMarkUp   tasks={['level-1::output']}/>, tasks:['level-1::output']},
        {title: "Operators - Numeric", markup: <OperatorsNumericMarkUp   />, tasks:[`level-1::operators-numeric`]},        
        {title: "Variables", markup: <VariablesMarkUp   />, tasks:[`level-1::variables-1`, `level-1::variables-2`, `level-1::variables-3`]},
        {title: "Inputs", markup: <InputsMarkUp   />, tasks: [`level-1::input-1`, `level-1::input-2`, `level-1::input-3`]},
        {title: "Operators - Strings", markup: <OperatorsStringMarkUp   />, tasks: [`level-1::operators-string`]},
        {title: "Operators - Booleans", markup: <OperatorsBooleanMarkUp   />, tasks:[`level-1::operators-booleans`]},
        {title: "Decisions", markup: <DecisionMarkUp   />, tasks: [`level-1::decisions-1`, `level-1::decisions-2`, `level-1::decisions-3`] },
        {title: "Range", markup: <RangeMarkUp   />, tasks:[`level-1::range-1`, `level-1::range-2`, `level-1::range-3`]},
        {title: "Loops - For", markup: <LoopsForMarkUp   />, tasks:[`level-1::for-1`, `level-1::for-2`, `level-1::for-3`]},
        {title: "Loops - While", markup: <LoopsWhileMarkUp   />, tasks:[`level-1::while-1`, `level-1::while-2`, `level-1::while-3`]},
        {title: "Defs", markup: <DefMarkUp   />, tasks:[`level-1::def-1`, `level-1::def-2`, `level-1::def-3`, `level-1::def-4`]},
        {title: "Lists", markup: <ListsMarkUp   />, tasks:[`level-1:lists-1`, `level-1:lists-2`, `level-1:lists-3`,`level-1:lists-4`, `level-1:lists-5`]} 
    ],
       
        
    Algorithms : [
        {title: "Input Validation", markup: <InputValidationMarkUp   />, tasks: []},
        {title: "Odds or Evens", markup: <OddsOrEvensMarkUp  />, tasks: []},
        {title: "Average", markup: <AverageRangeMarkUp   />, tasks: []},
    ],
    Challenges: [
        // {title: "Temperature Converter - detect that the user has entered F or C and convert "}
        {title: "Grade Checker",      markup: <GradeCheckerMarkUp   />, tasks: []},
        {title: "Elevator Control", markup: <ElevatorControlMarkUp  />, tasks: []},
        {title: "Emergency Response", markup: <EmergencyResponseMarkUp   />, tasks: []},
        {title: "Temp Converter", markup: <TempConverterMarkUp   />, tasks: []},
        {title: "Bottle of Pepsi", markup: <BottlesOfPepsiMarkUp   />, tasks: []},
        {title: "Letter Count ", markup: <LetterCountMarkUp   />, tasks: []},
        {title: "Transpose", markup: <TransposeMarkUp   />, tasks: []},
        {title: "Triangle", markup: <TrianglesMarkUp  />, tasks: []},
        {title: "Elevator Control", markup: <ElevatorControlMarkUp  />, tasks: []},
        // {title: "Coffee", markup: <ElevatorControlMarkUp  />},
        // Pasword Generator
        // Find First in List
        // Find Highest in List
        // Is each item in a correct position (items to the left are lower, items to the right are higher)
    ],
    Database:[
        {title: "Create Table", markup: <SqlCreateTableMarkUp  />, tasks: ['db-task-create']},
        {title: "Insert Record", markup: <SqlInsertRecordMarkUp  />, tasks: ['db-task-insert']},
        {title: "Select Single Table", markup: <SqlSelectRecordMarkUp  />, tasks: ['db-task-select']},
        {title: "Delete Rows", markup: <SqlDeleteRecordMarkUp  />, tasks: ['db-task-delete']},
        {title: "Update Rows", markup: <SqlUpdateRecordMarkUp  />, tasks: ['db-task-update']},


    ]

}

const getLevels = () => (levels)

const getTasks = (email) => (
    getLevels(email)['Learn'].map(t => t.tasks).flat()
    )

export default levels
export {getLevels, getTasks}