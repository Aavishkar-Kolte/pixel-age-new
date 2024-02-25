export const drawAllElements = ({
    ctx,
    background,
    torch1,
    torch2,
    tallCandle,
    playerHealthBarBG,
    enemyHealthBarBG,
    playerWeaponIcon,
    enemyWeaponIcon,
    playerHealth,
    enemyHealth,
    playerHealthBar,
    enemyHealthBar,
    player,
    enemy,
    playerName,
    enemyName,
    gameOver
}) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    background.update();
    torch1.update();
    torch2.update();
    tallCandle.update();

    playerHealthBarBG.update();
    enemyHealthBarBG.update();

    playerWeaponIcon.update();
    enemyWeaponIcon.update();

    playerHealth.ctx.drawImage(
        playerHealth.image,
        0,
        0,
        playerHealth.image.width,
        playerHealth.image.height,
        playerHealth.position.x - playerHealth.offset.x,
        playerHealth.position.y - playerHealth.offset.y,
        (playerHealth.image.width * player.health / 100) * playerHealth.scale,
        playerHealth.image.height * playerHealth.scale
    );

    enemyHealth.ctx.drawImage(
        enemyHealth.image,
        0,
        0,
        enemyHealth.image.width,
        enemyHealth.image.height,
        enemyHealth.position.x - enemyHealth.offset.x,
        enemyHealth.position.y - enemyHealth.offset.y,
        (enemyHealth.image.width * enemy.health / 100) * enemyHealth.scale,
        enemyHealth.image.height * enemyHealth.scale
    );

    playerHealthBar.update();
    enemyHealthBar.update();

    ctx.font = "26px Papyrus";
    ctx.fillStyle = "white";
    ctx.fillText(playerName.current, 115, 31);

    ctx.fillStyle = "white";
    ctx.fillText(enemyName.current, 854 - ctx.measureText(enemyName.current).width - 114, 31);

    if (gameOver.current === false || enemy.currentSprite === "idle" || enemy.currentSprite === "death") {
        enemy.update();
    }

    if (gameOver.current === false || player.currentSprite === "idle" || player.currentSprite === "death") {
        player.update();
    }
}
