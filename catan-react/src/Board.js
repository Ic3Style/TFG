import React from 'react';

export class CatanBoard extends React.Component {

    render() {


      function shuffle (array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
        ///he quitado el clickHandler
        // Make a list with the right number of each tile
        var locations = ["Hills", "Hills", "Hills",
        "Forest", "Forest", "Forest", "Forest",
        "Mountains", "Mountains", "Mountains",
        "Fields", "Fields", "Fields", "Fields",
        "Pasture", "Pasture", "Pasture", "Pasture",
        "Dessert"];

        // Make a list with the right number of each tile value
        var values = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];

        // Randomly shuffle the location array and the values array
        locations = shuffle(locations);
        values = shuffle(values);

        const cellStyle = {
          border: '1px solid #555',
          width: '50px',
          height: '50px',
          lineHeight: '50px',
          textAlign: 'center',
        };

        //let uniqueID = 0;
        let tbody = [];
        
        for (let i = 0; i < 5; i++) {
          let cells = [];
          for (let j = 0; j < 5; j++) {
            const id = 5 * i + j;
            cells.push( //he quitado el onclick
              <td style={cellStyle} key={id}> 
                {this.props.G.cells[id]}
              </td>
            );
          }
          tbody.push(<tr key={i}>{cells}</tr>);
        }
        /*
        for (let i = 0; i < 5; i++) {
          let cells = [];
          if(i===0 || i===4)
            for (let j = 0; j < 3; j++) {
              const id = uniqueID;
              uniqueID++;
              cells.push( //he quitado el onclick
                <td style={cellStyle} key={id}> 
                  {this.props.G.terrainCells[id]}
                </td>
              );
            }
          else if(i===1 || i===3)
            for (let j = 0; j < 4; j++) {
              const id = uniqueID;
              uniqueID++;
              cells.push( //he quitado el onclick
                <td style={cellStyle} key={id}> 
                  {this.props.G.terrainCells[id]}
                </td>
              );
            }
          else{
            for (let j = 0; j < 5; j++) {
              const id = uniqueID;
              uniqueID++;
              cells.push( //he quitado el onclick
                <td style={cellStyle} key={id}> 
                  {this.props.G.terrainCells[id]}
                </td>
              );
            }
          }

          tbody.push(<tr key={i}>{cells}</tr>);
        }
        */

        return (
          <div>
            <table id="board">
              <tbody>{tbody}</tbody>
            </table>
            Aqui se pone info de la partida y cartas
          </div>
        );
      }

 


}