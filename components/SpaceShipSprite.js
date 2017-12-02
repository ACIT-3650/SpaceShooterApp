/**
 * Created by renzo on 2017-11-27.
 */

const SpaceShipSprite = {
    name:"ship",
    size: {width: 75, height: 75},
    animationTypes: ['IDLE'],
    frames: [
        require('./nightraiderfixed.png'),
    ],
    animationIndex: function getAnimationIndex (animationType) {
        switch (animationType) {
            case 'IDLE':
                return [0];
        }
    },
};

export default SpaceShipSprite;