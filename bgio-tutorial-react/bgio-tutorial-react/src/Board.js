import React from 'react';

export class TicTacToeBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }



  render() {

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

    tileWidth = 124,
    tileHeight = 108,
    tileBigHeight = 140;

    tiles = [];

    // Get the position of the robber
    robberPosition = locations.indexOf("Dessert");

    var i, 
    valIndex = 0,
    x = 1*tileWidth,
    y = 1*tileHeight;

    for (i = 0; i < 3; i++) {
      if (i != robberPosition)
          tiles.push(new Location(i, locations[i], values[valIndex++], x, y));
      else
          tiles.push(new Location(i, locations[i], 0, x, y));
      x += tileWidth;
    }
    x -= 3.5 * tileWidth;
    y += tileHeight;
    for (i = 3; i < 7; i++) {
        if (i != robberPosition)
            tiles.push(new Location(i, locations[i], values[valIndex++], x, y));
        else
            tiles.push(new Location(i, locations[i], 0, x, y));
        x += tileWidth;
    }
    x -= 4.5 * tileWidth;
    y += tileHeight;
    for (i = 7; i < 12; i++) {
        if (i != robberPosition)
            tiles.push(new Location(i, locations[i], values[valIndex++], x, y));
        else
            tiles.push(new Location(i, locations[i], 0, x, y));
        x += tileWidth;
    }
    x -= 4.5 * tileWidth;
    y += tileHeight;
    for (i = 12; i < 16; i++) {
        if (i != robberPosition)
            tiles.push(new Location(i, locations[i], values[valIndex++], x, y));
        else
            tiles.push(new Location(i, locations[i], 0, x, y));
        x += tileWidth;
    }
    x -= 3.5 * tileWidth;
    y += tileHeight;
    for (i = 16; i < 19; i++) {
        if (i != robberPosition)
            tiles.push(new Location(i, locations[i], values[valIndex++], x, y));
        else
            tiles.push(new Location(i, locations[i], 0, x, y));
        x += tileWidth;
    }



    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }

  // Function to draw a hexagon and returns an array with an array of vertex coordinates
  drawHexagon(x, y, fillColor) {
    var sideLength = 72;
    var hexagonAngle = 0.523598776; // 30 degrees in radians
    var hexHeight = Math.sin(hexagonAngle) * sideLength;
    var hexRadius = Math.cos(hexagonAngle) * sideLength;
    var hexRectangleHeight = sideLength + 2 * hexHeight;
    var hexRectangleWidth = 2 * hexRadius;
    var listOfVertexCoordinates = []; //array that will hold the vertices of the hexagon

    this.ctx.fillStyle = fillColor;
    this.ctx.beginPath();
    var v0 = [x + hexRadius, y]; //creates an array with the coordinates as entries
    this.ctx.moveTo(v0[0], v0[1]); //move to vertex 0
    listOfVertexCoordinates.push(v0); //pushes the coordinates array to the vertex array
    var v1 = [x + hexRectangleWidth, y + hexHeight];
    this.ctx.lineTo(v1[0], v1[1]); // move to vertex 1
    listOfVertexCoordinates.push(v1);
    var v2 = [x + hexRectangleWidth, y + hexHeight + sideLength];
    this.ctx.lineTo(v2[0], v2[1]); //move to vertex 2
    listOfVertexCoordinates.push(v2);
    var v3 = [x + hexRadius, y + hexRectangleHeight];
    this.ctx.lineTo(v3[0], v3[1]); //move to vertex 3
    listOfVertexCoordinates.push(v3);
    var v4 = [x, y + sideLength + hexHeight];
    this.ctx.lineTo(v4[0], v4[1]); //move to vertex 4
    listOfVertexCoordinates.push(v4);
    var v5 = [x, y + hexHeight];
    this.ctx.lineTo(v5[0], v5[1]); //move to vertex 5
    listOfVertexCoordinates.push(v5);
    this.ctx.closePath(); //close off the hexagon by going back to vertex 0

    this.ctx.fill();
    this.ctx.fillStyle = "black";
    this.ctx.stroke();

    return listOfVertexCoordinates; //returns the list of of vertices for the hexagon
    //(two-dimensional array that holds arrays of x and y pairs for each vertex)
}
}


    /*
    let winner = '';
    if (this.props.ctx.gameover) {
      winner =
        this.props.ctx.gameover.winner !== undefined ? (
          <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      textAlign: 'center',
    };

    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }
    */