export const load = scene => {
  [
    'wizard',
    'archer',
    'ninja',
    'knight',
    'zombie',
    'zombie-girl',
    'ninja-girl',
    'robot',
    'jack',
    'viking'
  ].forEach(x => scene.load.image(x, `assets/${x}.png`));

  scene.load.spritesheet('slash',
    'assets/slash.png',
    { frameWidth: 70, frameHeight: 70 }
  );
};

export default { load };
