
const SpaceShipSprite = {
    name:"ship",
    size: {width: 85, height: 75},
    animationTypes: ['IDLE'],
    frames: [
        require('../assets/Ship.png'),
    ],
    animationIndex: function getAnimationIndex (animationType) {
        switch (animationType) {
            case 'IDLE':
                return [0];
        }
    },
};

export default SpaceShipSprite;