import React from 'react';

const buttons = [ {
    id: 1,
    name: 'A',
    text: 'AAAAA',
    time: '600ms',
    animationElement: []
},
{
    id: 2,
    name: 'S',
    text: 'SSSSS',
    time: '600ms',
    animationElement: []
},
{
    id: 3,
    name: 'D',
    text: 'DDDDD',
    time: '600ms',
    animationElement: []
},
{
    id: 4,
    name: 'F',
    text: 'FFFFF',
    time: '600ms',
    animationElement: []
},
{
    id: 5,
    name: 'G',
    text: 'GGGGG',
    time: '600ms',
    animationElement: []
},
{
    id: 6,
    name: 'H',
    text: 'HHHHH',
    time: '600ms',
    animationElement: []
},
{
    id: 7,
    name: 'J',
    text: 'JJJJJ',
    time: '600ms',
    animationElement: []
},
{
    id: 8,
    name: 'K',
    text: 'KKKKK',
    time: '600ms',
    animationElement: []
},
{
    id: 9,
    name: 'L',
    text: 'LLLLL',
    time: '600ms',
    animationElement: []
},
{
    id: 10,
    name: 'Z',
    text: 'ZZZZZ',
    time: '600ms',
    animationElement: []
},
{
    id: 11,
    name: 'X',
    text: 'XXXXX',
    time: '600ms',
    animationElement: []
},
{
    id: 12,
    name: 'C',
    text: 'CCCCC',
    time: '600ms',
    animationElement: []
},
{
    id: 13,
    name: 'V',
    text: 'VVVVV',
    time: '600ms',
    animationElement: []
},
{
    id: 14,
    name: 'B',
    text: 'BBBBB',
    time: '600ms',
    animationElement: []
},
{
    id: 15,
    name: 'N',
    text: 'NNNNN',
    time: '600ms',
    animationElement: []
},
{
    id: 16,
    name: 'M',
    text: 'MMMMM',
    time: '600ms',
    animationElement: []
},
];

class Header extends React.Component {
    render() {
        const rows = [];
        for(let i = 0; i < buttons.length; i = i + 4) {
            
            const elem = <div className="row">
                <div className="box"> {buttons[i].name} </div>
                <div className="box"> {buttons[i + 1].name} </div>
                <div className="box"> {buttons[i + 2].name} </div>
                <div className="box"> {buttons[i + 3].name} </div>
            </div>

            rows.push(elem)
        }
        return <h1>
            {rows}
        </h1>
    }
}

export {Header}