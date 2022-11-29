import { Button as BtnStyle} from "./style";

function Button(props) {
    return (  
        <BtnStyle bg_color={props.bg_color} color={props.color}>
            {props.title}
        </BtnStyle>    
    );
}

export default Button;