
const SpaceShipSprite = {
    name:"ship",
    size: {width: 75, height: 75},
    animationTypes: ['IDLE'],
    frames: [
        require('../assets/Dorito.png'),
    ],
    animationIndex: function getAnimationIndex (animationType) {
        switch (animationType) {
            case 'IDLE':
                return [0];
        }
    },
};

export default SpaceShipSprite;