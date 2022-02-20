export function processInstructions(instructions: string): string[] {
  const instructionsLines = instructions
    .split('\n')
    .map((i: string) => i.trim());
  const bounds = instructionsLines.shift()?.replace(/\s+?/g, '');
  const roversInstructions = [];
  for (let i = 0; i < instructionsLines.length; i += 2) {
    const position = instructionsLines[i].replace(/\s+?/g, '').split('');
    console.log({position});
    roversInstructions.push({
      start: {
        x: parseInt(position[0]),
        y: parseInt(position[1]),
        z: position[2],
      },
      instructions: instructionsLines[i + 1].split(''),
    });
  }
  for (const roverInstructions of roversInstructions) {
    roverInstructions.instructions.forEach((instruction: string) => {
      switch (instruction) {
        case 'M':
          switch (roverInstructions.start.z) {
            case 'N':
              roverInstructions.start.y += 1;
              break;
            case 'E':
              roverInstructions.start.x += 1;
              break;
            case 'S':
              roverInstructions.start.y -= 1;
              break;
            case 'W':
              roverInstructions.start.x -= 1;
              break;
          }
          break;
        case 'L':
          switch (roverInstructions.start.z) {
            case 'N':
              roverInstructions.start.z = 'W';
              break;
            case 'E':
              roverInstructions.start.z = 'N';
              break;
            case 'S':
              roverInstructions.start.z = 'E';
              break;
            case 'W':
              roverInstructions.start.z = 'S';
              break;
          }
          break;
        case 'R':
          switch (roverInstructions.start.z) {
            case 'N':
              roverInstructions.start.z = 'E';
              break;
            case 'E':
              roverInstructions.start.z = 'S';
              break;
            case 'S':
              roverInstructions.start.z = 'W';
              break;
            case 'W':
              roverInstructions.start.z = 'N';
              break;
          }
      }
    });
  }

  return roversInstructions.map((roverInstructions) =>
    Object.values(roverInstructions.start).join(' ')
  );
}
