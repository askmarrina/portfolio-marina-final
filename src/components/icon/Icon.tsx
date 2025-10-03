
import iconsSprite from '../../assets/images/svg-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '40'} height={props.height || '40'} viewBox={props.viewBox || '0 0 45 45'} fill='none'>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};

