export default class TilesSingle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setImmovable(true)
    this.setOrigin(0, 0)
    // @ts-ignore
    this.body.setAllowGravity(false)

    // this allows the player to jump through a tile from below
    this.body.checkCollision.down = false
    this.body.checkCollision.right = false
    this.body.checkCollision.left = false
  }
}
