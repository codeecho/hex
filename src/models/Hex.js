export default function Hex(side, row, index){
    return {
        id: Math.random(),
        side,
        row,
        index
    };
}