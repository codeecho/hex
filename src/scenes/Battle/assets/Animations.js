export const load = scene => {
  scene.anims.create({
    key: 'slash',
    frames: scene.anims.generateFrameNumbers('slash', { start: 0, end: 24 }),
    frameRate: 20
  });
};

export default { load };
