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
import CardConverterMarkUp from '../level-2/card-converter';

import SqlCreateTableMarkUp from '../database/create-tables';
import SqlInsertRecordMarkUp from '../database/insert-tables';
import SqlSelectRecordMarkUp from '../database/select-single-table';
import SqlDeleteRecordMarkUp from '../database/delete-rows';
import SqlUpdateRecordMarkUp from '../database/update-records';

import SkillsTestIO from '../python-skills/io';
import SkillsTestSimpleDecision from '../python-skills/simple-decision';
import SkillsTestWhileLoops from '../python-skills/while-loops';

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
        {title: "Lists", markup: <ListsMarkUp   />, tasks:[`level-1::lists-1`, `level-1::lists-2`, `level-1::lists-3`,`level-1::lists-4`, `level-1::lists-5`]} 
    ],
    
    Challenges: [
        {title: "🌶 IO", markup: <SkillsTestIO  />, tasks: ["skills::io"]},
        {title: "🌶 Simple Decision", markup: <SkillsTestSimpleDecision  />, tasks: ["skills::simple-decision"]},
        {title: "🌶 While loops", markup: <SkillsTestWhileLoops  />, tasks: ["skills::while-loops"]},
        {title: "🌶 Input Validation", markup: <InputValidationMarkUp   />, tasks: ["level-2::input-validation"]},
        {title: "🌶 Odds or Evens", markup: <OddsOrEvensMarkUp  />, tasks: ["level-2::odds-or-evens"]},
        {title: "🌶 Average", markup: <AverageRangeMarkUp   />, tasks: ["level-2::average-range"]},
        {title: "🌶 Grade Checker",      markup: <GradeCheckerMarkUp   />, tasks: ["level-3::grade-checker"]},
        {title: "🌶 Temp Converter", markup: <TempConverterMarkUp   />, tasks: ["level-3::temp-converter"]},
        {title: "🌶🌶 Elevator Control", markup: <ElevatorControlMarkUp  />, tasks: ["level-3::elevator-control"]},
        {title: "🌶🌶 Card Converter", markup: <CardConverterMarkUp  />, tasks: ["level-2::card-value-1", "level-2::card-value-2", "level-2::card-value-3"]},
        
        {title: "🌶🌶🌶 Emergency Response", markup: <EmergencyResponseMarkUp   />, tasks: ["level-3::emergency-response"]},
        {title: "🌶🌶🌶 Bottle of Pepsi", markup: <BottlesOfPepsiMarkUp   />, tasks: ["level-3::bottles-of-pepsi"]},
        {title: "🌶🌶🌶 Letter Count ", markup: <LetterCountMarkUp   />, tasks: ["level-3::letter-count"]},
        {title: "🌶🌶🌶 Transpose", markup: <TransposeMarkUp   />, tasks: ["level-3::transpose"]},
        {title: "🌶🌶🌶 Triangles", markup: <TrianglesMarkUp  />, tasks: ["level-3::triangles"]},
        {title: "🌶🌶🌶 Elevator Control", markup: <ElevatorControlMarkUp  />, tasks: ["level-3::elevator-control"]},
        
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
    ],

    "Python Skills Test": [
        
    ]

}

const getLevels = () => (levels)

const getTasks = (email) => (
    getLevels(email)['Learn'].map(t => t.tasks).flat()
    )

export default levels
export {getLevels, getTasks}