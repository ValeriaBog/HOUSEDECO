import {Button} from "../styles/button.styled";
import {Modal} from "../styles/modal.styled";
import {Text} from "../styles/title.styled";
import {Image} from "../styles/image.styled";

export const Card = ()=>{
    return(
        <>
            <Modal>
                <Image/>
                <div>
                    <Text as={'h1'} color={'rgba(94, 94, 94, 0.85)'}>Headline</Text>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <div>
                        <Button btnType={'primary'}>See more</Button>
                        <Button btnType={'outlined'}>Save</Button>
                    </div>
                </div>
            </Modal>

        </>
    )
}